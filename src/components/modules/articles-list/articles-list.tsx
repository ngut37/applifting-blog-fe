import React, { useEffect, useMemo, useState } from 'react';

import { Article, listArticles } from '@api/articles';

import { Flex, VStack } from '@chakra-ui/react';

import { ArticleItem, SkeletonArticleItem } from '@organisms/article-item';
import { NoContent } from '@organisms/no-content';

export const ArticlesList = () => {
  const [articles, setArticles] = useState<Article[] | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      const res = await listArticles({ page: 1, skip: 0 });
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
      const articleItems = articles
        .sort(
          ({ createdAt: aCreatedAt }, { createdAt: bCreatedAt }) =>
            new Date(bCreatedAt).getTime() - new Date(aCreatedAt).getTime(),
        )
        .map((article) => <ArticleItem key={article.id} {...article} />);
      listContent = articleItems;
    } else {
      // items have no length
      return <NoContent />;
    }
    return <VStack spacing="40px">{listContent}</VStack>;
  }, [loading, articles]);

  return <Flex>{articleList}</Flex>;
};
