/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [{ source: '/products', destination: '/produits', permanent: true }]
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
}

module.exports = nextConfig
