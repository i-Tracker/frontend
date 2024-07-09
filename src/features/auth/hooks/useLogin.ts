import { AxiosError } from 'axios';
import { saveAccessToken } from '../api/oauth';
import { useUserStatus } from '../context/userStatusContext';
import instance from '@/shared/api/axios/instance';
import { API_BASE_URL } from '@/shared/api/constants';

export const useLogin = () => {
  const { isFirstTimeUser, setIsFirstTimeUser } = useUserStatus();

  const handleLogin = async (code: string) => {
    try {
      if (isFirstTimeUser) {
        await getNewUserLoginToken(code);

        return;
      }

      await getLoginToken(code);
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response?.data?.code === 'ERR_4010') {
          // 최초 로그인 사용자인 경우
          alert('최초 가입자입니다. 회원가입 페이지로 이동합니다.');
          setIsFirstTimeUser(true);
          window.location.href = '/signup';
        } else {
          alert('로그인 실패:');
          console.error(error.response?.data);
        }
      }
    }
  };

  const getLoginToken = async (code: string) => {
    const response = await instance.get(`${API_BASE_URL}/api/v1/oauth/login/kakao?code=${code}`);
    const jwt = response.headers?.['authorization'] as string;

    saveAccessToken(jwt);
    setIsFirstTimeUser(false);
  };

  const getNewUserLoginToken = async (code: string) => {
    const response = await instance.get(`${API_BASE_URL}/api/v1/oauth/login/kakao/new?code=${code}`);
    const jwt = response.headers?.['authorization'] as string;

    saveAccessToken(jwt);
    setIsFirstTimeUser(false);
  };

  return { handleLogin, getLoginToken, getNewUserLoginToken };
};
