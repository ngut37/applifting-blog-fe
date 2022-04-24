import { MessageObject } from '../../types';

import { headerMessages } from './header';
import { loginMessages } from './login';

export const enUS = Object.freeze<MessageObject>({
  ...headerMessages,
  ...loginMessages,
});
