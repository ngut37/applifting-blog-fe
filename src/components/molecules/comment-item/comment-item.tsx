import React, { useCallback, useMemo, useState } from 'react';

import dayjs from 'dayjs';

import { Comment, voteComment } from '@api/comments';

import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Button, Divider, HStack, VStack } from '@chakra-ui/react';

import { Text } from '@atoms/text';

type Props = Comment;

export const CommentItem = ({
  id,
  articleId,
  author,
  createdAt,
  content,
  score,
}: Props) => {
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);

  const formattedDate = useMemo(
    () => dayjs(createdAt).format('DD/MM/YYYY'),
    [createdAt],
  );

  const scorePrefix = useMemo(() => {
    const scoreNum = Number(score);
    if (!scoreNum || scoreNum < 0) return '';
    if (scoreNum > 0) return '+';
  }, [score]);

  const upvoteHandler = useCallback(async () => {
    if (!upvoted) {
      await voteComment({ commentId: id, vote: 'up' });
      if (downvoted) {
        await voteComment({ commentId: id, vote: 'up' });
        setDownvoted(false);
      }
      setUpvoted(true);
    } else {
      await voteComment({ commentId: id, vote: 'down' });
      setUpvoted(false);
    }
  }, [id, upvoted, setUpvoted, downvoted, setDownvoted]);

  const upvoteButton = useMemo(() => {
    return (
      <Button variant="ghost" onClick={upvoteHandler}>
        <ArrowUpIcon color={upvoted ? 'orange' : 'gray.900'} />
      </Button>
    );
  }, [articleId, upvoted, upvoteHandler]);

  const downvoteHandler = useCallback(async () => {
    if (!downvoted) {
      await voteComment({ commentId: id, vote: 'down' });
      if (upvoted) {
        await voteComment({ commentId: id, vote: 'down' });
        setUpvoted(false);
      }
      setDownvoted(true);
    } else {
      await voteComment({ commentId: id, vote: 'up' });
      setDownvoted(false);
    }
  }, [id, downvoted, setDownvoted, upvoted, setUpvoted]);

  const downvoteButton = useMemo(() => {
    return (
      <Button variant="ghost" onClick={downvoteHandler}>
        <ArrowDownIcon color={downvoted ? 'orange' : 'gray.900'} />
      </Button>
    );
  }, [articleId, downvoted, downvoteHandler]);

  return (
    <VStack justifyContent="flex-start" alignItems="flex-start" width="100%">
      <HStack spacing="20px">
        <Text message={{ text: author }} />
        <Text
          message={{ text: formattedDate }}
          fontSize={12}
          color="gray.600"
        />
      </HStack>
      <Text message={{ text: content }} />
      <HStack height="30px">
        <Text message={{ text: `${scorePrefix}${score}` }} paddingX="10px" />
        <Divider
          orientation="vertical"
          height="15px"
          width="2px"
          color="gray.900"
        />
        {upvoteButton}
        <Divider
          orientation="vertical"
          height="15px"
          width="2px"
          color="gray.900"
        />
        {downvoteButton}
      </HStack>
    </VStack>
  );
};
