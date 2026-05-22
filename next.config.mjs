/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/aga', // ← これを付け足してください！
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
