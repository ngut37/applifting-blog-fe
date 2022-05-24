import { apiClient } from '@utils/api-client';
import { getToken, saveToken } from '@utils/storage/auth';

type LoginParams = {
  name: string;
  password: string;
};

type LoginResponseData = {
  accessToken: string;
};

export const login = async ({ name, password }: LoginParams) => {
  const res = await apiClient.request<LoginResponseData>({
    url: '/auth/login',
    method: 'POST',
    data: {
      name,
      password,
    },
  });

  const { accessToken } = res.data;
  saveToken(accessToken);

  return res;
};

export type MeResponseBody = {
  name: string;
};

export const me = async () => {
  try {
    const res = await apiClient.request<MeResponseBody>({
      url: '/auth/me',
      method: 'GET',
    });

    return res;
  } catch {
    return;
  }
};
