import type { NextPage } from 'next';

import { Flex } from '@chakra-ui/react';

import { MainContainer } from '@containers/main-container';
import { Login } from '@modules/login';

const LoginPage: NextPage = () => {
  return (
    <MainContainer>
      <Flex justifyContent="center" alignItems="center">
        <Login />
      </Flex>
    </MainContainer>
  );
};

export default LoginPage;
