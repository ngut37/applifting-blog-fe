import { MessageObject } from '../../types';

import { headerMessages } from './header';
import { loginMessages } from './login';
import { articlesMessages } from './articles';

export const enUS = Object.freeze<MessageObject>({
  ...headerMessages,
  ...loginMessages,
  ...articlesMessages,
});
