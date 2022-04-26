import React from 'react';

import { Article } from '@api/articles';

import { Divider, HStack, VStack } from '@chakra-ui/react';

import { Comments } from '@organisms/comments';
import { SingleArticleContent } from '@organisms/single-article-content';
import { RelatedArticles } from '@organisms/related-articles';

type Props = Article;

export const SingleArticle = (article: Props) => {
  return (
    <HStack minHeight="400px" alignItems="flex-start" spacing="30px">
      <VStack width="700px" spacing="30px">
        <SingleArticleContent {...article} />
        <Divider orientation="horizontal" />
        <Comments id={article.id} comments={article.comments} />
      </VStack>
      <HStack alignItems="flex-start" paddingTop="40px" spacing="20px">
        <Divider orientation="vertical" width="1px" minHeight="500px" />
        <RelatedArticles />
      </HStack>
    </HStack>
  );
};
