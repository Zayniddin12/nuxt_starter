// composables/errorsAlert.ts
import { ElNotification } from 'element-plus';
import errors from './errors';

interface AxiosError {
  config: any;
  status?: number;
  statusText?: string;
  data?: any;
  message?: string;
}

// Asosiy funksiya
export function errorsAlert(error: AxiosError) {
  try {
    let requestBody: Record<string, any> | null = null;

    // FormData bo'lsa object ga o'girish
    if (error.config?.data instanceof FormData) {
      requestBody = {};
      error.config.data.forEach((value: any, key: string) => {
        requestBody![key] = value;
      });
    } else if (error.config?.data) {
      requestBody = JSON.parse(error.config.data);
    }

    const requestMethodName = requestBody?.method || '';
    const dataError = error || null;

    if (dataError?.data?.message) {
      if (error.status === 422) {
        showMessage(`${requestMethodName} ${getValidateErrors(error)}`);
      } else {
        showMessage(`${requestMethodName} ${dataError.data.message}`);
      }
    } else if (dataError?.message) {
      showMessage(`<b>${requestMethodName}</b><br/> ${dataError.message}`);
    } else if (error.status && error.statusText) {
      if (error.data?.error === 'invalid_credentials') {
        showMessage(`<b>${requestMethodName}</b><br/> ${errors[401]} | 401`);
      } else {
        showMessage(
          `<b>${requestMethodName}</b><br/> ${error.statusText} | ${error.status} ${getValidateErrors(error)}`
        );
      }
    }
  } catch (err) {
    console.error(err);
  }
}

// Notification ko'rsatish
function showMessage(content: string) {
  ElNotification({
    title: 'Xatolik',
    message: content,
    type: 'error',
    duration: 4000,
    dangerouslyUseHTMLString: true
  });
}

// 422 validatsiya xatolarini qaytarish
function getValidateErrors(error: AxiosError): string | null {
  const status = error.status;
  let errData = error.data;

  if (status === 422 && errData?.errors) {
    let message = '\n - ';
    Object.keys(errData.errors).forEach((field) => {
      message += errData.errors[field].join(' \n - ');
    });
    return message;
  }
  return errData?.message || null;
}
