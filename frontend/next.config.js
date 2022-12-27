/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/api/:slug*',
        destination: 'http://localhost:8000/api/:slug*' //Proxy to backend, development
        // destination: 'http://0:0:0:0:8000/api/:slug*' //Proxy to backend, development
      }
    ]
  }
}

module.exports = nextConfig
