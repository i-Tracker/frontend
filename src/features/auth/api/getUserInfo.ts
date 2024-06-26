import instance from '@/shared/api/axios/instance';

interface GetUserInfoResponse {
  data: { id: number; nickname: string; image: string };
}

export const getUserInfo = async () => {
  const response = await instance.get<GetUserInfoResponse>(`/api/v1/me`);

  return response.data.data;
};
