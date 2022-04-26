import React, { useMemo } from 'react';

import { Article } from '@api/articles';

import { VStack } from '@chakra-ui/react';

import { CommentForm } from '@molecules/comment-form';
import { CommentItem } from '@molecules/comment-item';
import { Text } from '@atoms/text';

type Props = Pick<Article, 'id' | 'comments'>;

export const Comments = ({ id, comments }: Props) => {
  const commentsSection = useMemo(() => {
    const commentItems = comments
      .sort(
        ({ createdAt: aCreatedAt }, { createdAt: bCreatedAt }) =>
          new Date(bCreatedAt).getTime() - new Date(aCreatedAt).getTime(),
      )
      .map((comment) => <CommentItem {...comment} key={comment.id} />);

    return (
      <VStack spacing="25px" alignItems="flex-start" width="100%">
        <Text
          message={{
            id: 'article.comments.title',
            values: { count: comments.length },
          }}
          fontSize={24}
          fontWeight={500}
        />
        <CommentForm articleId={id} />
        {commentItems}
      </VStack>
    );
  }, [comments]);

  return commentsSection;
};
