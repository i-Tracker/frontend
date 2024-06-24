import { useQuery } from '@tanstack/react-query';
import { getUserInfo } from '../api/getUserInfo';
import { isLogin } from '../api/oauth';

export const useUserInfo = () => {
  return useQuery({ queryKey: ['userInfo'], queryFn: getUserInfo, enabled: isLogin() });
};
