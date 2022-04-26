import React from 'react';

import { Article } from '@api/articles';

import { Skeleton, VStack } from '@chakra-ui/react';

import { Link } from '@molecules/link';
import { Text } from '@atoms/text';

import classes from './related-article-item.module.scss';

type Props = Article;

export const RelatedArticleItem = ({ id, title, perex }: Props) => {
  return (
    // set as external (workaround for refetching article)
    <Link className={classes.itemLink} href={`/articles/${id}`} external>
      <VStack height="100px" alignItems="flex-start">
        <Text
          className={classes.itemTitle}
          message={{ text: title }}
          fontSize={16}
          fontWeight={500}
          color="gray.700"
        />
        {perex && (
          <Text
            message={{ text: perex }}
            fontSize={14}
            noOfLines={3}
            color="gray.700"
          />
        )}
      </VStack>
    </Link>
  );
};

export const RelatedArticleItemSkeleton = () => {
  return (
    <VStack height="100px">
      <Skeleton
        isLoaded={false}
        width="50%"
        height="30px"
        marginBottom="20px"
      />
      <Skeleton isLoaded={false} width="70%" height="12px" />
    </VStack>
  );
};
