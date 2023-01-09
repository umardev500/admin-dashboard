/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  env: {
    MEMBERSHIP_API: 'http://localhost:8000/membership/api',
    SECRET: 'taiAyam'
  }
}

module.exports = nextConfig
