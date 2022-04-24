import React, { PropsWithChildren } from 'react';

import { FieldError } from 'react-hook-form';

import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  InputGroup,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroupProps,
} from '@chakra-ui/react';
import { Text, TextProps } from '@atoms/text';

type InputProps = {
  inputProps: ChakraInputProps;
  formControlProps?: FormControlProps;
  inputGroupPropsWithChildren?: PropsWithChildren<InputGroupProps>;
  error?: FieldError;
};

export const Input = React.forwardRef(
  ({
    inputProps,
    inputGroupPropsWithChildren,
    formControlProps,
    error,
  }: InputProps) => {
    const inputGroupChildren = inputGroupPropsWithChildren?.children;
    return (
      <FormControl {...formControlProps}>
        <InputGroup {...inputGroupPropsWithChildren}>
          {inputGroupChildren}
          <ChakraInput bg="white" {...inputProps}></ChakraInput>
        </InputGroup>
        {error && (
          <FormErrorMessage overflowWrap="anywhere">
            {error.message}
          </FormErrorMessage>
        )}
      </FormControl>
    );
  },
);

type InputLabelProps = TextProps;

export const InputLabel = ({
  fontSize = 'sm',
  w = '100%',
  ...restProps
}: InputLabelProps) => {
  return <Text fontSize={fontSize} w={w} {...restProps} />;
};
