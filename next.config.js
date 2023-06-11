/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build-next-static',
  assetPrefix: './',
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
