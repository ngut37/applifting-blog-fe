import React, { useMemo } from 'react';

import dayjs from 'dayjs';

import { messageIdConcat } from '@utils/message-id-concat';

import { Article } from '@api/articles';

import { HStack, VStack, Button } from '@chakra-ui/react';

import { Link } from '@molecules/link';
import { Text } from '@atoms/text';

type Props = Article;

const m = messageIdConcat('articles');

export const ArticleDescription = ({
  id,
  title,
  createdAt,
  perex,
  comments,
}: Props) => {
  const formattedDate = useMemo(
    () => dayjs(createdAt).format('DD/MM/YYYY'),
    [createdAt],
  );

  return (
    <VStack
      alignItems="flex-start"
      justifyContent="space-between"
      height="100%"
    >
      <VStack spacing="11px" alignItems="flex-start">
        <Text message={{ text: title }} fontSize={24} fontWeight="500" />
        <Text
          message={{ text: formattedDate }}
          fontSize={14}
          color="gray.600"
        />
        {perex && <Text message={{ text: perex }} noOfLines={3} />}
      </VStack>
      <HStack spacing="20px">
        <Link href={`/articles/${id}`}>
          <Button variant="link">
            <Text message={{ id: m('view_article') }} color="blue.600" />
          </Button>
        </Link>
        <Text
          message={{
            id: m('comments.count'),
            values: { count: comments.length },
          }}
          fontSize={14}
          color="gray.500"
        />
      </HStack>
    </VStack>
  );
};
