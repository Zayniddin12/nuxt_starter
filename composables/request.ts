// composables/requestService.ts
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getToken, clearForLogout } from './auth/index';
import { errorsAlert } from './requestAlerts';

export const service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_BASE_URL,
  timeout: 30000,
});

// Request interceptor
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = getToken();
    if (token) {
      config.headers = config.headers || {};
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error: any) => Promise.reject(error)
);

// Response interceptor
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data;
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error:any) => {
    if (error.response) {
      const status = error.response.status;
      errorsAlert(error.response);

      if (status === 401) {
        // Nuxt 3 navigation
        clearForLogout();
        navigateTo('/login'); // Login routega yo‘naltirish
      }
    }
    return Promise.reject(error.response);
  }
);
