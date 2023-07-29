import { httpBatchLink } from '@trpc/client';
import { createTRPCReact } from '@trpc/react-query';
import superjson from 'superjson';
import { AppRouter } from 'trpc-api-boilerplate';

// Uncomment bellow line if not importing tRPC API from npm package - https://github.com/mkosir/trpc-api-boilerplate#avoid-publishing-package
// import { AppRouter } from '../api-types';

export const trpcApiBoilerplateClient = createTRPCReact<AppRouter>();

export const trpcApiBoilerplateClientProvider = trpcApiBoilerplateClient.createClient({
  links: [httpBatchLink({ url: process.env.NEXT_PUBLIC_TRPC_API })],
  transformer: superjson,
});
