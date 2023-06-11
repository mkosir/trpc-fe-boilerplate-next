/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build-next-static',
  assetPrefix: './', // GitHub pages CDN
  basePath: '/trpc-fe-boilerplate', // GitHub pages path prefix
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
