import axios from 'axios';
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '../constants';
import LocalStorage from '@/shared/utils/localStorage';

export const getAccessToken = () => LocalStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);

export const isLogin = () => Boolean(getAccessToken());

export const removeAccessToken = () => {
  LocalStorage.removeItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
};

export const logout = () => {
  removeAccessToken();
  window.location.href = '/';
};

export const getLoginToken = async (code: string) => {
  try {
    const response = await axios.get(`/api/token?code=${code}`);

    saveAccessToken(response.data as string);
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
