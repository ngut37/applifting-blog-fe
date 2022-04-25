import axios, { AxiosRequestConfig } from 'axios';

import { config } from '@config';

import { getToken } from './storage/auth';

export const apiClient = axios.create({
  baseURL: config.API_URL,
  headers: {
    'x-api-key': '18109415-e13f-4ab9-b9fc-d3f5776087be',
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
