# tRPC Frontend Boilerplate ![Heisenberg](/misc/heisenberg_75.png)

[![CI][ci-badge]][ci-url]

Minimal [tRPC](https://trpc.io/) frontend boilerplate for separate BE-FE repositories. Easily consume fully typesafe APIs.

Monorepos are great, but sometimes we are targeting backend and frontend as separate (mono)repositories:

- separation/encapsulation of backend and frontend domain (except what must be exposed to both through API).
- separation of backend and frontend developers (larger teams/companies).
- separation of backend and frontend CI/CD pipelines, PRs, issues, etc.

... in that case checkout this boilerplate.

## Running

_Easily set up a local development environment_

- clone repo
- `npm install`
- `npm run dev`
- use latest tRPC API in your app 🚀

## Import tRPC API

There are 3 ways to import tRPC API types from backend repo:

1. Install npm package `npm i trpc-api-boilerplate` - [currently set](https://github.com/mkosir/trpc-fe-boilerplate/blob/main/src/common/trpc-api-boilerplate/client/index.ts#L4) as a default option
2. Run npm script `npm run trpc-api-import` and [uncomment line](https://github.com/mkosir/trpc-fe-boilerplate/blob/main/src/common/trpc-api-boilerplate/client/index.ts#L7)
3. Link backend repo using npm link

## Example Repo

Example backend API repository - [tRPC API Boilerplate](https://github.com/mkosir/trpc-api-boilerplate)

<!-- Badges -->

[ci-badge]: https://github.com/mkosir/trpc-fe-boilerplate/actions/workflows/CI.yml/badge.svg
[ci-url]: https://github.com/mkosir/trpc-fe-boilerplate/actions/workflows/CI.yml
