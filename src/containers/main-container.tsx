import React, { ReactNode } from 'react';

import Head from 'next/head';

import { Header } from '@modules/header';

type Props = {
  children?: ReactNode;
  title?: string;
};

export const MainContainer = ({
  title = 'Applifting blog',
  children,
}: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content={title} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
      </Head>
      <Header />
      <main>{children}</main>
    </div>
  );
};
