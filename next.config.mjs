/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/fynsubs',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
