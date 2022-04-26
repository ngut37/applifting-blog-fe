import React, { useEffect, useMemo, useState } from 'react';

import dayjs from 'dayjs';

import { Article } from '@api/articles';
import { getImage } from '@api/image';

import { Flex, VStack, Image } from '@chakra-ui/react';

import { Text } from '@atoms/text';

type Props = Article;

export const SingleArticleContent = ({
  title,
  createdAt,
  imageId,
  content,
}: Props) => {
  const formattedDate = useMemo(
    () => dayjs(createdAt).format('DD/MM/YYYY'),
    [createdAt],
  );

  const [imageUrl, setImageUrl] = useState<string>('');

  useEffect(() => {
    (async () => {
      if (imageId) {
        const res = await getImage(imageId);
        const buffer = Buffer.from(res.data).toString('base64');
        setImageUrl('data:image/png;base64,' + buffer);
      }
    })();
  }, [imageId]);

  return (
    <VStack alignItems="flex-start" width="100%" spacing="24px">
      <Text message={{ text: title }} fontSize={40} fontWeight={500} />
      <Text message={{ text: formattedDate }} fontSize={14} color="gray.600" />
      <Flex
        width="100%"
        overflow="hidden"
        maxHeight="400px"
        alignItems="center"
      >
        <Image src={imageUrl} height="100%" />
      </Flex>
      <Text message={{ text: content }} fontSize={16} color="gray.700" />
    </VStack>
  );
};
