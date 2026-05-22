/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/ladies1', // ← これを付け足してください！
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
