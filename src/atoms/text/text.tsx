import React from 'react';

import { useIntl } from 'react-intl';

import { Message, messageToString } from '@utils/message';

import {
  Heading as ChakraHeading,
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react';

enum TEXT_TYPES {
  'heading',
  'text',
}

type TextBaseProps = {
  type?: TEXT_TYPES;
  message: Message;
};

export type TextProps = TextBaseProps & ChakraTextProps;

export const Text = ({
  type = TEXT_TYPES.text,
  message,
  ...textProps
}: TextProps) => {
  const intl = useIntl();

  const content = messageToString(message, intl);

  if (type === TEXT_TYPES.heading)
    return <ChakraHeading {...textProps}>{content}</ChakraHeading>;
  else return <ChakraText {...textProps}>{content}</ChakraText>;
};
