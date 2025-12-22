/** @type {import('next').NextConfig} */

const repoName = '/netsecurity'; 

const nextConfig = {
  output: 'export',
  basePath: repoName,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig