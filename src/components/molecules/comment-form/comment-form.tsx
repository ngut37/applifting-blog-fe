import React, { useCallback, useState } from 'react';

import { useIntl } from 'react-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { config } from '@config';

import { yup } from '@utils/yup';
import { messageToString } from '@utils/message';
import { messageIdConcat } from '@utils/message-id-concat';

import {
  FormControl,
  FormErrorMessage,
  Textarea,
  useToast,
  VStack,
} from '@chakra-ui/react';

import { Button } from '@atoms/button';
import { Comment, insertComment } from '@api/comments';

import classes from './comment-form.module.scss';

type Inputs = {
  content: string;
};

const m = messageIdConcat('article.comments');

type Props = Pick<Comment, 'articleId'>;

export const CommentForm = ({ articleId }: Props) => {
  const intl = useIntl();
  const toast = useToast();

  const [submitting, setSubmitting] = useState(false);

  const schema = yup.object().shape({
    content: yup
      .string()
      .strict()
      .required(messageToString({ id: m('input.error.required') }, intl)),
  });

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = useCallback(
    async (data) => {
      setSubmitting(true);
      try {
        await insertComment({
          articleId,
          author: config.TENANT_NAME,
          content: data.content,
        });
      } catch {
      } finally {
        setSubmitting(false);
        setValue('content', '');
        toast({
          title: messageToString({ id: m('input.toast.title') }, intl),
          description: messageToString(
            { id: m('input.toast.description') },
            intl,
          ),
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      }
    },
    [intl],
  );

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <VStack alignItems="flex-end">
        <FormControl isInvalid={Boolean(errors.content)}>
          <Textarea
            id="content"
            placeholder={messageToString({ id: m('input.placeholder') }, intl)}
            resize="vertical"
            {...register('content')}
          />
          {errors.content && (
            <FormErrorMessage overflowWrap="anywhere">
              {errors.content.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <Button
          size="sm"
          type="submit"
          message={{ id: m('input.button') }}
          isLoading={submitting}
        />
      </VStack>
    </form>
  );
};
