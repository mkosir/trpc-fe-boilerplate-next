/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build-next-static',
  assetPrefix: './', // GitHub pages CDN
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
