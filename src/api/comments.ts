import { apiClient } from '@utils/api-client';

export type Comment = {
  id: string;
  articleId: string;
  author: string;
  content: string;
  score: string;
  createdAt: string;
};

type InsertCommentParams = {
  articleId: string;
  author: string;
  content: string;
};

export const insertComment = async ({
  articleId,
  author,
  content,
}: InsertCommentParams) => {
  try {
    const res = await apiClient.request<Comment>({
      url: '/comments',
      method: 'POST',
      data: {
        articleId,
        author,
        content,
      },
    });
    return res;
  } catch {
    return undefined;
  }
};

type ScoreComment = {
  vote: 'up' | 'down';
  commentId: string;
};

export const voteComment = async ({ vote, commentId }: ScoreComment) => {
  try {
    const res = await apiClient.request({
      url: `/comments/${commentId}/vote/${vote}`,
      method: 'POST',
    });
    return res;
  } catch {
    return undefined;
  }
};
