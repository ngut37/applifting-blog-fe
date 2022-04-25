import { apiClient } from '@utils/api-client';

export type Comment = {
  id: string;
  articleId: string;
  author: string;
  content: string;
  score: string;
};

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
