/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build-next-static',
  assetPrefix: './', // GitHub pages CDN
  basePath: process.env.NODE_ENV === 'production' ? '/trpc-fe-boilerplate' : undefined, // GitHub pages path prefix
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
