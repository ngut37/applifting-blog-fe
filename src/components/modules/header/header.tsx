import React, { useCallback, useContext, useMemo } from 'react';

import Image from 'next/image';

import { Box, Flex, HStack } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';

import { AuthContext } from '@contexts/auth';
import { Link } from '@molecules/link';
import { Button } from '@atoms/button';
import { Text } from '@atoms/text';

import classes from './header.module.scss';

export const Header = () => {
  const { auth, logout } = useContext(AuthContext);

  const authentication = useMemo(() => {
    if (auth?.name) {
      return (
        <HStack spacing="20px">
          <Text message={{ text: auth.name }} />
          <Button
            onClick={logout}
            message={{ id: 'logout' }}
            variant="link"
            rightIcon={<ArrowForwardIcon />}
          />
        </HStack>
      );
    } else {
      return (
        <Link href="/login">
          <Button
            message={{ id: 'login' }}
            variant="link"
            rightIcon={<ArrowForwardIcon />}
          />
        </Link>
      );
    }
  }, [auth]);

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
          <Link href="/">
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
          </Link>
          <Link href="/">
            <Button message={{ id: 'recent_articles' }} variant="link" />
          </Link>
          <Link href="/lorem-page">
            <Button message={{ id: 'about' }} variant="link" />
          </Link>
        </HStack>
        {authentication}
      </Flex>
    </header>
  );
};
