/** @type {import('next').NextConfig} */

const githubPagesDeploy =
  process.env.NODE_ENV === 'production'
    ? {
        assetPrefix: './', // GitHub pages CDN RR
        basePath: '/trpc-fe-boilerplate', // GitHub pages path prefix
      }
    : {};

const nextConfig = {
  output: 'export',
  distDir: 'build-next-static',
  swcMinify: true,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  ...githubPagesDeploy,
};

module.exports = nextConfig;
