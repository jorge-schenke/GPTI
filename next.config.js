/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['farmaciasdeldrsimicl.vtexassets.com', 'beta.cruzverde.cl', 'cdn-ahumada-premium.azureedge.net']
  },
}

module.exports = nextConfig
