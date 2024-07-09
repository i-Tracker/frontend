import axios, { AxiosError } from 'axios';
import { API_BASE_URL } from '../constants';
import LocalStorage from '@/shared/utils/localStorage';
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '@/features/auth/constants';
import { logoutToLoginPage } from '@/features/auth/api/oauth';

const instance = axios.create({
  baseURL: API_BASE_URL,
});

instance.interceptors.request.use(
  function (config) {
    const accessToken = LocalStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);

    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response) => response,
  (error: unknown) => {
    if (error instanceof AxiosError && error.response) {
      const { status } = error.response;

      if (status === 400 || status === 401) {
        // 토큰이 없거나 잘못되었을 경우
        logoutToLoginPage();
      }
    } else {
      // AxiosError가 아니거나 response가 없는 경우의 처리
      console.error('An unexpected error occurred:', error);
    }

    return Promise.reject(error);
  },
);

export default instance;
