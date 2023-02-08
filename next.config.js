/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  basePath: "/app",
  env: {
    MEMBERSHIP_API: 'http://localhost:8000/membership/api',
    SECRET: 'taiAyam'
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/app',
        permanent: true,
        basePath: false
      },
    ]
  },
}

module.exports = nextConfig
