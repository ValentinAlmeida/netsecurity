const isProd = process.env.NODE_ENV === 'production'
const repoName = isProd ? '/netsecurity' : ''

const nextConfig = {
  output: 'export',
  basePath: repoName,
  assetPrefix: repoName,
  env: {
    NEXT_PUBLIC_BASE_PATH: repoName,
  },
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig