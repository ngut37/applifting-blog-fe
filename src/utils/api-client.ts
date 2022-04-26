import axios, { AxiosRequestConfig } from 'axios';

import { config } from '@config';

import { getToken } from './storage/auth';

export const apiClient = axios.create({
  baseURL: config.API_URL,
  headers: {
    'x-api-key': config.API_KEY,
  },
});

const originalRequest = apiClient.request;
apiClient.request = async (requestConfig: AxiosRequestConfig) => {
  // auth token inject
  const token = getToken();

  if (token) {
    if (!requestConfig.headers) requestConfig.headers = {};
    requestConfig.headers.authorization = `Bearer ${token}`;
  }

  const result = await originalRequest(requestConfig);

  return result;
};
