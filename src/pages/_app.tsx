import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { reactQueryClient } from 'common/reactQueryClient';
import 'common/styles/global.css';
import { trpcApiBoilerplateClient, trpcApiBoilerplateClientProvider } from 'common/trpc-api-boilerplate';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import Link from 'next/link';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>tRPC Frontend Boilerplate</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="favicon.ico" />
      </Head>
      <trpcApiBoilerplateClient.Provider client={trpcApiBoilerplateClientProvider} queryClient={reactQueryClient}>
        <QueryClientProvider client={reactQueryClient}>
          <div className="flex bg-blueSky-100/40 p-3">
            <Link href="/" className="text-blueSky-700 hover:text-blueSky-800">
              Home
            </Link>
            <Link href="/users" className="mx-4 text-blueSky-700 hover:text-blueSky-800">
              Users
            </Link>
            <Link href="/batches" className="text-blueSky-700 hover:text-blueSky-800">
              Batches
            </Link>
          </div>
          <div className="p-3">
            <Component {...pageProps} />
          </div>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </trpcApiBoilerplateClient.Provider>
    </>
  );
}
