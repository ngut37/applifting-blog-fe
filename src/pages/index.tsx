import { useCallback } from 'react';

import type { NextPage } from 'next';

import { listArticles } from '@api/articles';

import { Button } from '@atoms/button';
import { MainContainer } from '@containers/main-container';

const Home: NextPage = () => {
  const buttonOnClickHandler = useCallback(async () => {
    await listArticles({ page: 1, skip: 0 });
  }, []);

  return (
    <MainContainer>
      <Button message={{ id: 'login' }} onClick={buttonOnClickHandler} />
    </MainContainer>
  );
};

export default Home;
