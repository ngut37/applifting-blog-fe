import React, { useMemo } from 'react';
import { useIntl } from 'react-intl';

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@chakra-ui/react';

import { Message, messageToString } from '@utils/message';

export type ButtonProps = ChakraButtonProps & {
  message: Message;
};

export const Button = ({ message, ...buttonProps }: ButtonProps) => {
  const intl = useIntl();
  const content = useMemo(
    () => messageToString(message, intl),
    [intl, message],
  );

  return (
    <ChakraButton colorScheme="gray" {...buttonProps}>
      {content}
    </ChakraButton>
  );
};
