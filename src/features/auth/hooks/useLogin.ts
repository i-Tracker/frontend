import { saveAccessToken } from '../api/oauth';
import instance from '@/shared/api/axios/instance';
import { API_BASE_URL } from '@/shared/api/constants';

export const useLogin = () => {
  const getLoginToken = async (code: string) => {
    try {
      const response = await instance.get(`${API_BASE_URL}/api/v1/oauth/login/kakao?code=${code}`);
      const jwt = response.headers?.['authorization'] as string;

      saveAccessToken(jwt);
    } catch (e) {
      console.error(e);
      alert('로그인 실패');
    }
  };

  return { getLoginToken };
};
