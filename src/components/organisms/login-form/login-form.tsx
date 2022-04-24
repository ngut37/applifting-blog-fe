import React, { useMemo, useState } from 'react';

import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { config } from '@config';

import { login } from '@api/auth';

import { yup } from '@utils/yup';
import { messageToString } from '@utils/message';
import { messageIdConcat } from '@utils/message-id-concat';

import {
  Alert,
  AlertIcon,
  AlertTitle,
  CloseButton,
  Flex,
  VStack,
} from '@chakra-ui/react';

import { Input, InputLabel } from '@molecules/input';
import { Button } from '@atoms/button';
import { Text } from '@atoms/text';

const m = messageIdConcat('login');

const minNameLength = 2;
const maxNameLength = 255;
const minPasswordLength = 6;
const maxPasswordLength = 255;

type Inputs = {
  name: string;
  password: string;
};

export const LoginForm = () => {
  const intl = useIntl();
  const router = useRouter();

  const schema = yup.object().shape({
    name: yup
      .string()
      .strict()
      .min(
        minNameLength,
        messageToString(
          {
            id: m('input.name.error.min'),
            values: { length: minNameLength },
          },
          intl,
        ),
      )
      .max(
        maxNameLength,
        messageToString({ id: m('input.name.error.max') }, intl),
      )
      .required(messageToString({ id: m('input.name.error.required') }, intl)),
    password: yup
      .string()
      .min(
        minPasswordLength,
        messageToString(
          {
            id: m('input.password.error.min'),
            values: { length: minPasswordLength },
          },
          intl,
        ),
      )
      .max(
        maxPasswordLength,
        messageToString({ id: m('input.password.error.max') }, intl),
      )
      .required(
        messageToString({ id: m('input.password.error.required') }, intl),
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    mode: 'onSubmit',
    reValidateMode: 'onBlur',
    resolver: yupResolver(schema),
    defaultValues: {
      name: config.TENANT_NAME,
    },
  });

  const [submitting, setSubmitting] = useState(false);
  const [showAuthError, setShowAuthError] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    setSubmitting(true);
    try {
      const response = await login(data);
      if (response.status === 201) {
        router.push('/');
      }
    } catch (e) {
      setShowAuthError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const loginError = useMemo(() => {
    if (showAuthError)
      return (
        <Alert my={5} pr={8} status="error" borderRadius={4} maxWidth="300px">
          <AlertIcon />
          <AlertTitle mr={2}>
            <Text message={{ id: m('error') }} color="gray.600"></Text>
          </AlertTitle>
          <CloseButton
            onClick={() => setShowAuthError(false)}
            position="absolute"
            right="8px"
            top="8px"
          />
        </Alert>
      );
  }, [showAuthError, intl, setShowAuthError]);

  return (
    <Flex flexDirection="column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={5} width="100%">
          <VStack spacing={2}>
            <InputLabel message={{ id: m('input.name.label') }} />
            <Input
              inputProps={{
                id: 'name',
                placeholder: messageToString(
                  { id: m('input.name.placeholder') },
                  intl,
                ),
                isDisabled: true,
                ...register('name'),
              }}
              formControlProps={{
                isInvalid: Boolean(errors.name),
              }}
              error={errors?.name}
            />
          </VStack>
          <VStack spacing={2}>
            <InputLabel message={{ id: m('input.password.label') }} />
            <Input
              inputProps={{
                id: 'password',
                type: 'password',
                placeholder: messageToString(
                  { id: m('input.password.placeholder') },
                  intl,
                ),
                ...register('password'),
              }}
              formControlProps={{
                marginTop: '1px',
                isInvalid: Boolean(errors.password),
              }}
              error={errors?.password}
            />
          </VStack>
          <Button
            size="lg"
            type="submit"
            width="100%"
            message={{ id: m('input.button') }}
            isLoading={submitting}
          />
        </VStack>
      </form>
      {loginError}
    </Flex>
  );
};
