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
  },
};

module.exports = nextConfig;
