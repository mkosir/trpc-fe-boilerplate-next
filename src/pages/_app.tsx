import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

import { reactQueryClient } from 'common/reactQueryClient';
import { trpcApiBoilerplateClient, trpcApiBoilerplateClientProvider } from 'common/trpc-api-boilerplate';

import 'common/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>tRPC Frontend Boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <trpcApiBoilerplateClient.Provider client={trpcApiBoilerplateClientProvider} queryClient={reactQueryClient}>
        <QueryClientProvider client={reactQueryClient}>
          <div className="flex">
            <Link href="/">Home</Link>
            <Link href="/users">Users</Link>
            <Link href="/batches">Batches</Link>
          </div>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </trpcApiBoilerplateClient.Provider>
    </>
  );
}
