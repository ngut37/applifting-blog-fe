import { MessageObject } from '../../types';

import { headerMessages } from './header';
import { loginMessages } from './login';
import { articlesMessages } from './articles';
import { articleMessages } from './article';

export const enUS = Object.freeze<MessageObject>({
  ...headerMessages,
  ...loginMessages,
  ...articlesMessages,
  ...articleMessages,

  no_content: 'No content 🤷‍♂️',
});
