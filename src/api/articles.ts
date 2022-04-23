import { apiClient } from '@utils/api-client';

type ListArticlesParam = {
  page: number;
  skip: number;
  limit?: number;
};
export const listArticles = async ({
  page,
  skip,
  limit = 10,
}: ListArticlesParam) => {
  await apiClient.request({
    url: '/article',
    method: 'GET',
    params: {
      page,
      skip,
      limit,
    },
  });
};
