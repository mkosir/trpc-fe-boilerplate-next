import { AppRouter } from 'trpc-api-boilerplate';

import type { inferRouterOutputs } from '@trpc/server';

// Not using tRPC API as npm package - https://github.com/mkosir/trpc-api-boilerplate#avoid-publishing-package
// import { AppRouter } from './api-types';

type RouterOutput = inferRouterOutputs<AppRouter>;

export type User = RouterOutput['user']['create'];
export type Users = RouterOutput['user']['list'];
