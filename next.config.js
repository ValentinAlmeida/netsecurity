/** @type {import('next').NextConfig} */

const repoName = '/netsecurity';

const nextConfig = {
  output: 'export',
  basePath: repoName,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig