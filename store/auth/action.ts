// store/auth/action.ts
import { AuthState } from './state';
import { signUpApi, login, logout as logoutApi, currentUser, storeApplications, updateApplications, userQuestions, getApplication, getApplicationById, sendToReview } from '@/api/auth';
import { setToken, setTokenTime, clearForLogout } from '@/utils/auth';


export interface AuthActions {
  signUp(data: any): Promise<any>;
  googleSignUp(data: any): Promise<any>;
  updateProfile(data: any): Promise<any>;
  getCurrentUser(): Promise<any>;
  storeApplications(data: any): Promise<any>;
  updateApplications(data: any): Promise<any>;
  getApplication(): Promise<any>;
  getApplicationById(id: number | string): Promise<any>;
  userQuestions(data: any): Promise<any>;
  sendToReview(params: any): Promise<any>;
  logout(router: any): Promise<any>;
  loginUser(data: any, router: any): Promise<any>;
  setTokenActions(params: any): Promise<any>;
}

export const actions: AuthActions & ThisType<AuthState & AuthActions> = {
  async signUp(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));

    try {
      const res: any = await signUpApi(formData);
      this.isAuth = true;
      setTokenTime(res.data.expires_in);
      setToken(res.data.access_token);
      await this.getCurrentUser();
      return res;
    } catch (err) {
      this.isAuth = false;
      throw err;
    }
  },

  async googleSignUp(data) {
    try {
      const res: any = await signUpApi(data);
      setToken(res.data.access_token);
      await this.getCurrentUser();
      return res;
    } catch (err) {
      this.isAuth = false;
      throw err;
    }
  },

  async updateProfile(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (data[key] || data[key] === 0) formData.append(key, data[key]);
    });
    formData.append('_method', 'PUT');

    try {
      const res: any = await signUpApi(formData);
      await this.getCurrentUser();
      return res;
    } catch (err) {
      this.isAuth = false;
      throw err;
    }
  },

  async getCurrentUser() {
    try {
      const res: any = await currentUser();
      if (res.success && res.data) {
        this.user = res.data;
        this.isAuth = true;
      } else {
        this.user = null;
        this.isAuth = false;
      }
      return res;
    } catch (err) {
      this.user = null;
      this.isAuth = false;
      throw err;
    }
  },

  async storeApplications(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    try {
      const res: any = await storeApplications(formData);
      return res;
    } catch (err) {
      throw err;
    }
  },

  async updateApplications(data) {
    const formData = new FormData();
    Object.keys(data).forEach(key => formData.append(key, data[key]));
    formData.append('_method', 'PUT');
    try {
      const res: any = await updateApplications(formData, data.uuid);
      return res;
    } catch (err) {
      throw err;
    }
  },

  async getApplication() {
    try {
      const res: any = await getApplication();
      this.applications = res.success && res.data ? res.data : {};
      return res;
    } catch (err) {
      this.applications = {};
      throw err;
    }
  },

  async getApplicationById(id) {
    try {
      const res: any = await getApplicationById(id);
      this.application = res.success && res.data ? res.data : {};
      return res.data;
    } catch (err) {
      this.application = {};
      throw err;
    }
  },



  async sendToReview(params) {
    try {
      const res: any = await sendToReview(params);
      if (res.success && res.data) this.application = res.data;
      return res;
    } catch (err) {
      throw err;
    }
  },

  async logout(router) {
    try {
      const res: any = await logoutApi();
      if (res.success) {
        clearForLogout();
        this.isAuth = false;
        this.user = null;
        router.push({ name: 'Login' });
      }
      return res;
    } catch (err) {
      this.isAuth = false;
      this.user = null;
      throw err;
    }
  },

  async loginUser(data, router) {
    try {
      const res: any = await login(data);
      if (res.success) {
        setToken(res.data.access_token);
        setTokenTime(res.data.expires_in);
        await this.getCurrentUser();
        this.isAuth = true;
        router.push({ name: 'Main' });
      } else {
        this.isAuth = false;
      }
      return res;
    } catch (err) {
      this.isAuth = false;
      this.user = null;
      throw err;
    }
  },

  async setTokenActions(params) {
    setToken(params.token);
    setTokenTime(params.expires_in);
    this.isAuth = true;
    return true;
  },
};
