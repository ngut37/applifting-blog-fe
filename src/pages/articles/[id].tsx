import React from 'react';

import { GetServerSideProps } from 'next';
import { getCookie } from 'cookies-next';

import { tokenName } from '@utils/storage/auth';

import { Article, getArticle } from '@api/articles';

import { Flex } from '@chakra-ui/react';

import { MainContainer } from '@containers/main-container';
import { SingleArticle } from '@modules/single-article';
import { NoContent } from '@organisms/no-content';

type Props = { article: Article | null };

type InitialProps = Props;

export const ArticlePage = ({ article }: Props) => {
  return (
    <MainContainer>
      <Flex justifyContent="center" alignItems="center" paddingY="50px">
        {article ? <SingleArticle {...article} /> : <NoContent />}
      </Flex>
    </MainContainer>
  );
};

export const getServerSideProps: GetServerSideProps<InitialProps> = async ({
  req,
  res,
  query,
}) => {
  // hacked ¯\_(ツ)_/¯
  const cookie = getCookie(tokenName, { req, res });

  const articleId = query.id as string;
  const articleRes = await getArticle({
    id: articleId,
    overrideToken: cookie?.toString(),
  });

  return { props: { article: articleRes?.data || null } };
};

export default ArticlePage;
