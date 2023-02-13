/** @type {import('next').NextConfig} */
// const baseURL = 'https://b934-140-213-140-224.ap.ngrok.io'
const baseURL = 'http://localhost:8000'

const nextConfig = {
  reactStrictMode: false,
  basePath: "/app",
  env: {
    MEMBERSHIP_API: `${baseURL}/membership/api`,
    SERVER_TIME_API: `${baseURL}/server-time`,
    AUTH_API: `${baseURL}/auth`,
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
