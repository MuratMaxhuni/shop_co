/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'picsum.photos',
      },
      {
        hostname: 'twitter.com',
      },
      {
        hostname: 'placeimg.com',
      },
      {
        hostname: 'ark-labs.co.uk',
      },
    ],
  },
};

export default nextConfig;

