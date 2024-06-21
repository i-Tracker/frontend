import { API_BASE_URL } from '@/shared/api/constants';
import axios from 'axios';
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '../constants';

export const getAccessToken = () => localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);

const removeAccessToken = () => {
  localStorage.removeItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
};

export const isLogin = () => Boolean(getAccessToken());

export const logout = () => {
  removeAccessToken();
};

export const issuLoginToken = async (code: string) => {
  try {
    const response = await axios.get(`/api/token?code=${code}`);

    console.log(response);
  } catch (error) {
    alert('로그인 실패:');
    console.error(error);
  }
};

const saveAccessToken = (response: Response) => {
  // if (!response.ok) {
  //   removeAccessToken();

  //   return;
  // }

  if (response) {
    localStorage.setItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY, response);
  }
};
