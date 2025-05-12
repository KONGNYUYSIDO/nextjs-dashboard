import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    // ppr: 'incremental',
    turbo: {
      // You can specify turbopack options here
      // For now we'll leave it empty to just enable turbopack
    }
  },
};


export default nextConfig;

