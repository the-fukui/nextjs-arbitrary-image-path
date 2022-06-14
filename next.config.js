module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/proxy/:path*',
        destination: 'https://storage.googleapis.com/nextjs-arbitrary-image-path/:path*',
      },
    ]
  },
}
