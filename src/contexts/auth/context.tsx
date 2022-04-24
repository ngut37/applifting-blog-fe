import { createContext } from 'react';

import { MeResponseBody } from '@api/auth';

export type AuthContextType = {
  auth: MeResponseBody | undefined;
  authenticate: () => Promise<void>;
  logout: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  auth: {
    name: '',
  },
  authenticate: async () => {},
  logout: async () => {},
});
