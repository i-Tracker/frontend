import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '../constants';
import LocalStorage from '@/shared/utils/localStorage';
import instance from '@/shared/api/axios/instance';
import { API_BASE_URL } from '@/shared/api/constants';

export const getAccessToken = () => LocalStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);

export const isLogin = () => Boolean(getAccessToken());

export const removeAccessToken = () => {
  LocalStorage.removeItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
};

export const logout = () => {
  removeAccessToken();

  window.location.href = '/';
};

export const logoutToLoginPage = () => {
  removeAccessToken();

  window.location.href = '/login?needLogin=true';
};

export const getLoginToken = async (code: string) => {
  try {
    const response = await instance.get(`${API_BASE_URL}/api/v1/oauth/login/kakao?code=${code}`);
    const jwt = response.headers?.['authorization'] as string;

    saveAccessToken(jwt);
  } catch (error) {
    alert('로그인 실패:');
    console.error(error);
  }
};

export const saveAccessToken = (response: string) => {
  if (!response) {
    removeAccessToken();

    return;
  }

  if (response) {
    LocalStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY, response);
  }
};
