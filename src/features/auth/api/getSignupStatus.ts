import { API_BASE_URL } from '@/shared/api/constants';

interface GetSignupStatus {
  data: {
    isDuplicatedPhoneNumber: boolean;
  };
}

export const getSignupStatus = async (phoneNumber: string): Promise<GetSignupStatus> => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/login/validate?phoneNumber=${phoneNumber}`);

    const data = (await response.json()) as GetSignupStatus;

    return data;
  } catch (e) {
    throw Error('전화번호 확인에 실패했습니다.');
  }
};
