import '@fontsource/inter/400.css';
import '@fontsource/inter/500.css';
import '@styles/global.scss';

import type { AppProps } from 'next/app';

import { ChakraProvider } from '@chakra-ui/react';

import { MessagesProvider } from '@providers/message-provider';

import { theme } from '@styles/chakra-ui-theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MessagesProvider>
        <Component {...pageProps} />
      </MessagesProvider>
    </ChakraProvider>
  );
}

export default App;
