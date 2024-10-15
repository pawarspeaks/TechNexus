// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'avatars.githubusercontent.com', // GitHub avatars domain
        },
        {
          protocol: 'https',
          hostname: 'images.pexels.com', // Pexels images domain
        },
      ],
    },
  };

  module.exports = nextConfig;
