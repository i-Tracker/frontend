import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '../constants';
import LocalStorage from '@/shared/utils/localStorage';
import instance from '@/shared/api/axios/instance';
import { API_BASE_URL } from '@/shared/api/constants';
import { AxiosError } from 'axios';

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

export const getLoginToken = async (code: string, isFirstUser: string) => {
  try {
    const response = await instance.get(`${API_BASE_URL}/api/v1/oauth/login/kakao?code=${code}&new=${isFirstUser}`);
    const jwt = response.headers?.['authorization'] as string;

    saveAccessToken(jwt);
  } catch (error) {
    alert('로그인 실패:');
    console.error(error);
  }
};

export const handleLogin = async (code: string, isFirstUser: string) => {
  try {
    await getLoginToken(code, isFirstUser);
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.status === 400 && error.code === 'ERR_4010') {
        // 최초 로그인 사용자인 경우
        alert('최초 가입자입니다. 회원가입 페이지로 이동합니다.');
        window.location.href = '/signup';
      } else {
        alert('로그인 실패:');
        console.error(error);
        throw error;
      }
    }
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
