import type { NextPage } from 'next';

import { Flex } from '@chakra-ui/react';

import { MainContainer } from '@containers/main-container';
import { ArticlesList } from '@modules/articles-list';

const Home: NextPage = () => {
  return (
    <MainContainer>
      <Flex justifyContent="center" alignItems="center" paddingY="50px">
        <ArticlesList />
      </Flex>
    </MainContainer>
  );
};

export default Home;
