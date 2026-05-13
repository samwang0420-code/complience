/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  swcMinify: true,
  compress: false,
  poweredByHeader: false,
  generateEtags: false,
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;
