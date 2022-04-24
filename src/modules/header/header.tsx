import React from 'react';

import Image from 'next/image';

import { Box, Flex, HStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { Link } from '@molecules/link';
import { Button } from '@atoms/button';

import classes from './header.module.scss';

export const Header = () => {
  return (
    <header className={classes.header}>
      <Flex
        backgroundColor="gray.100"
        justifyContent="space-between"
        alignItems="center"
        paddingX="40px"
        paddingY="15px"
      >
        <HStack spacing="10px">
          <Flex
            width="30px"
            height="30px"
            position="relative"
            paddingRight="10px"
          >
            <Image
              src="/static/img/logo.png"
              layout="fill"
              objectFit="cover"
              quality={100}
              alt="logo"
            />
          </Flex>
          <Link href="/"></Link>
          <Link href="/">
            <Button message={{ id: 'recent_articles' }} variant="link" />
          </Link>
          <Link href="/lorem-page">
            <Button message={{ id: 'about' }} variant="link" />
          </Link>
        </HStack>
        <Link href="/lorem-page">
          <Button
            message={{ id: 'login' }}
            variant="link"
            rightIcon={<ArrowForwardIcon />}
          />
        </Link>
      </Flex>
    </header>
  );
};
