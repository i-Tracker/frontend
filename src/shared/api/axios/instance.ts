import axios from 'axios';
import { API_BASE_URL } from '../constants';
import LocalStorage from '@/shared/utils/localStorage';
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '@/features/auth/constants';
import { logout } from '@/features/auth/api/oauth';

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
    console.log(error);
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    const {
      config,
      response: { status },
    } = error;

    if (status === 400) {
      // 토큰이 없거나 잘못되었을 경우
      logout();
    }

    return Promise.reject(error);
  },
);

export default instance;
