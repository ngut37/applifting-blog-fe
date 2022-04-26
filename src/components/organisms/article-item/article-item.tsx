import React, { useEffect, useMemo, useState } from 'react';

import { Article } from '@api/articles';
import { getImage } from '@api/image';

import { Flex, HStack, Image, Skeleton, VStack } from '@chakra-ui/react';

import { NoContent } from '@organisms/no-content';
import { ArticleDescription } from '@molecules/article-description';

type Props = Article;

export const ArticleItem = (article: Props) => {
  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (article.imageId) {
        const res = await getImage(article.imageId);
        const buffer = Buffer.from(res.data).toString('base64');
        setImageUrl('data:image/png;base64,' + buffer);
      }
    })();
  }, [article.imageId]);

  return (
    <HStack width="860px" height="200px" maxHeight="200px" spacing="20px">
      <Flex
        minWidth="300px"
        maxWidth="300px"
        overflow="hidden"
        maxHeight="200px"
        alignItems="center"
        justifyContent="center"
      >
        {imageUrl ? (
          <Image src={imageUrl} width="100%" />
        ) : (
          <Flex
            backgroundColor="gray.50"
            width="100%"
            height="200px"
            alignItems="center"
            justifyContent="center"
          >
            <NoContent />
          </Flex>
        )}
      </Flex>
      <ArticleDescription {...article} />
    </HStack>
  );
};

export const SkeletonArticleItem = () => {
  return (
    <HStack width="860px" height="200px" spacing="20px">
      <Flex width="270px" height="100%" overflow="hidden">
        <Skeleton isLoaded={false} width="100%" height="100%" />
      </Flex>
      <VStack width="400px" height="100%" alignItems="flex-start">
        <Skeleton
          isLoaded={false}
          width="50%"
          height="30px"
          marginBottom="20px"
        />
        <Skeleton isLoaded={false} width="70%" height="12px" />
        <Skeleton isLoaded={false} width="60%" height="12px" />
        <Skeleton isLoaded={false} width="80%" height="12px" />
        <Skeleton isLoaded={false} width="86%" height="12px" />
        <Skeleton isLoaded={false} width="65%" height="12px" />
      </VStack>
    </HStack>
  );
};
