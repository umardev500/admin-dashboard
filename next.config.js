/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    API_URL: 'http://localhost:7000/api/'
  }
}

module.exports = nextConfig
