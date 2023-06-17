# tRPC Frontend Boilerplate ![Heisenberg](/misc/heisenberg_75.png)

[![CI][ci-badge]][ci-url]

Minimal [tRPC](https://trpc.io/) frontend boilerplate for separate BE-FE repositories. Easily consume fully typesafe APIs.

Monorepos are great, but sometimes we are targeting backend and frontend as separate (mono)repositories:

- separation/encapsulation of backend and frontend domain (except what must be exposed to both through API).
- separation of backend and frontend developers (larger teams/companies).
- separation of backend and frontend CI/CD pipelines.

... in that case checkout this boilerplate.

## Running

_Easily set up a local development environment_

- clone repo
- `npm install`
- `npm run dev`
- use latest tRPC API in your app 🚀

## Example Repo

Example backend API repository - [tRPC API Boilerplate](https://github.com/mkosir/trpc-api-boilerplate)

<!-- Badges -->

[ci-badge]: https://github.com/mkosir/trpc-fe-boilerplate/actions/workflows/CI.yml/badge.svg
[ci-url]: https://github.com/mkosir/trpc-fe-boilerplate/actions/workflows/CI.yml
