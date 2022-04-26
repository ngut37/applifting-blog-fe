import { setCookies, getCookie, removeCookies } from 'cookies-next';

export const tokenName = 'access_token';

export const saveToken = (token: string) => {
  if (typeof window === 'undefined') return;

  setCookies(tokenName, token, { path: '/' });
};

export const getToken = (): string | undefined => {
  const token = getCookie(tokenName) as string;
  if (!token) return undefined;
  return token;
};

export const removeToken = (): void => {
  removeCookies(tokenName);
};
