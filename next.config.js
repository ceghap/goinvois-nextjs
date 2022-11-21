// @ts-check
/**
 * @type {import('next').NextConfig}
 **/

const nextConfig = {
  /* config options here */
  env: {
    AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID || '',
    AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET || '',
    AUTH0_ISSUER: process.env.AUTH0_ISSUER || '',
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET || '',
    EMAIL_SERVER: process.env.EMAIL_SERVER || '',
    EMAIL_FROM: process.env.EMAIL_FROM || '',
    EMAIL_SERVER_USER: process.env.EMAIL_SERVER_USER || '',
    EMAIL_SERVER_PASSWORD: process.env.EMAIL_SERVER_PASSWORD || '',
    EMAIL_SERVER_HOST: process.env.EMAIL_SERVER_HOST || '',
    EMAIL_SERVER_PORT: process.env.EMAIL_SERVER_PORT || '',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's.gravatar.com',
      },
    ],
  },
};

module.exports = nextConfig;
