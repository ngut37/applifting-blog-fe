import React from 'react';

import { Flex } from '@chakra-ui/react';

import { messageIdConcat } from '@utils/message-id-concat';

import { LoginForm } from '@organisms/login-form';
import { Text } from '@atoms/text';

const m = messageIdConcat('login');

export const Login = () => {
  return (
    <Flex
      paddingY="50px"
      paddingX="10px"
      width="368px"
      backgroundColor="white"
      margin="64px"
      borderRadius="8px"
      boxShadow="xl"
      justifyContent="center"
      alignItems="center"
    >
      <Flex flexDirection="column" alignItems="flex-start">
        <Text
          type="heading"
          message={{ id: m('title') }}
          paddingBottom="30px"
        />
        <LoginForm />
      </Flex>
    </Flex>
  );
};
