/** @type {import('next').NextConfig} */
const nextConfig = {
  // Let the build fail if there are real ESLint / TypeScript errors
  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Enable Next.js image optimization (remove unoptimized: true)
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
}

export default nextConfig
