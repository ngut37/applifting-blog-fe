import { AxiosRequestConfig } from 'axios';

import { config } from '@config';

import { apiClient } from '@utils/api-client';

import { Comment } from './comments';

export type Article = {
  id: string;
  title: string;
  perex?: string;
  imageId?: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  comments: Comment[];
};

type PaginatedList<T> = {
  items: T[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
};

type ListArticlesParam = {
  page: number;
  skip: number;
  limit?: number;
};

type ListArticlesResponseBody = PaginatedList<Article>;

export const listArticles = async ({
  page,
  skip,
  limit = 10,
}: ListArticlesParam) => {
  try {
    const res = await apiClient.request<ListArticlesResponseBody>({
      url: '/articles',
      method: 'GET',
      params: {
        page,
        skip,
        limit,
      },
    });
    return res;
  } catch (error) {
    return undefined;
  }
};

type GetArticleParam = {
  id: string;
  overrideToken?: string;
};

export const getArticle = async ({ id, overrideToken }: GetArticleParam) => {
  const headers: AxiosRequestConfig['headers'] = {
    'x-api-key': config.API_KEY,
  };

  if (overrideToken) headers['Authorization'] = `Bearer ${overrideToken}`;

  try {
    const res = await apiClient.request<Article>({
      url: `/articles/${id}`,
      method: 'GET',
      headers,
    });
    return res;
  } catch {
    return undefined;
  }
};
