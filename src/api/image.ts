import { apiClient } from '@utils/api-client';

export const getImage = async (imageId: string) => {
  const res = await apiClient.request({
    responseType: 'arraybuffer',
    url: `/images/${imageId}`,
    method: 'GET',
  });

  return res;
};
