import type { inferRouterOutputs } from '@trpc/server';

import { AppRouter } from './api-types';

type RouterOutput = inferRouterOutputs<AppRouter>;

export type User = RouterOutput['user']['create'];
