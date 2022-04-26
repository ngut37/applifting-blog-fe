import React, { useEffect, useMemo, useState } from 'react';

import { messageIdConcat } from '@utils/message-id-concat';

import { Article, listArticles } from '@api/articles';

import { VStack } from '@chakra-ui/react';

import { SkeletonArticleItem } from '@organisms/article-item';
import { NoContent } from '@organisms/no-content';
import { RelatedArticleItem } from '@molecules/related-article-item';
import { Text } from '@atoms/text';

const m = messageIdConcat('article.related_articles');

export const RelatedArticles = () => {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const res = await listArticles({ page: 1, skip: 0, limit: 4 });
      if (res?.data) setArticles(res.data.items);
      setLoading(false);
    })();
  }, []);

  const articleList = useMemo(() => {
    let listContent = [];
    if (loading) {
      // skeleton loading while waiting for backend response
      const skeletonList = [];
      for (let i = 0; i < 3; i++) {
        skeletonList.push(<SkeletonArticleItem key={i} />);
      }
      listContent = skeletonList;
    } else if (articles?.length) {
      // response given -> render content
      const articleItems = articles.map((article) => (
        <RelatedArticleItem key={article.id} {...article} />
      ));
      listContent = articleItems;
    } else {
      // items have no length
      return <NoContent />;
    }
    return <VStack spacing="40px">{listContent}</VStack>;
  }, [loading, articles]);

  return (
    <VStack maxWidth="350px">
      <Text
        message={{ id: m('title') }}
        fontSize={24}
        fontWeight={500}
        marginBottom="10px"
      />
      {articleList}
    </VStack>
  );
};
