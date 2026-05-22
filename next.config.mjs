/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Xサーバー用ビルドの時だけ /aga をつけ、Vercelの時は空（なし）にする設定
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '', 
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
