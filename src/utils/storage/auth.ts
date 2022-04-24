import Cookies from 'universal-cookie';

const tokenName = 'access_token';

const cookies = new Cookies();

export const saveToken = (token: string) => {
  if (typeof window === 'undefined') return;

  cookies.set(tokenName, token, { path: '/' });
};

export const getToken = (): string | undefined => {
  const token = cookies.get(tokenName) as string;
  if (!token) return undefined;
  return token;
};

export const removeToken = (): void => {
  cookies.remove(tokenName);
};
