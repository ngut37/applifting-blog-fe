import React, {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { useRouter } from 'next/router';

import { removeToken } from '@utils/storage/auth';

import { me, MeResponseBody } from '@api/auth';

import { Flex, Spinner } from '@chakra-ui/react';

import { AuthContext } from './context';

type Props = PropsWithChildren<{ protectedPage?: boolean }>;

export const AuthProvider = ({ protectedPage = false, children }: Props) => {
  const router = useRouter();

  const [loading, setLoading] = useState<boolean>(true);
  const [auth, setAuthState] = useState<MeResponseBody | undefined>();

  const authenticate = useCallback(async () => {
    let { data } = await me();
    if (data?.name) {
      setAuthState(data);
    } else if (!data) {
      if (protectedPage && !data) {
        // re-route user to login page if not authenticated
        // ! This reroute is too sudden.
        router.push('/login');
      }
    }
    setLoading(false);
  }, []);

  const logout = useCallback(async () => {
    removeToken();
    setAuthState(undefined);
    router.push('./login');
  }, []);

  useEffect(() => {
    (async () => {
      await authenticate();
    })();
  }, []);

  const content = useMemo(
    () =>
      loading ? (
        <Flex width="100%" height="100vh" justify="center" align="center">
          <Spinner thickness="4px" speed="0.85s" size="xl" />
        </Flex>
      ) : (
        children
      ),
    [loading],
  );

  return (
    <AuthContext.Provider value={{ auth, authenticate, logout }}>
      {content}
    </AuthContext.Provider>
  );
};
