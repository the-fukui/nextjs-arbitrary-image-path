module.exports = {
  reactStrictMode: true,
  experimental: {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'storage.googleapis.com',
          port: "",
          pathname: '/nextjs-arbitrary-image-path/**',
        },
      ],
    },
  }
}
