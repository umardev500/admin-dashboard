/** @type {import('next').NextConfig} */
const baseURL = 'https://3351-140-213-132-236.ap.ngrok.io'
// const baseURL = 'http://localhost:8000'

const nextConfig = {
  reactStrictMode: false,
  basePath: "/app",
  env: {
    MEMBERSHIP_STATIC: `${baseURL}/membership/static`,
    MEMBERSHIP_API: `${baseURL}/membership/api`,
    SERVER_TIME_API: `${baseURL}/server-time`,
    AUTH_API: `${baseURL}/auth`,
    SECRET: 'taiAyam',
    DUMY_USERNAME: "username",
    DUMY_PASSWORD: "password"
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
