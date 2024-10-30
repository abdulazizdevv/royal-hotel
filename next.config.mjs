import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';
import withBundleAnalyzer from '@next/bundle-analyzer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 86400,
  },
  pwa: {
    dest: 'public',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/, // Match all URLs
        handler: 'NetworkFirst', // Use the Network First strategy
        options: {
          cacheName: 'http-cache',
          expiration: {
            maxEntries: 50, // Maximum number of entries in the cache
            maxAgeSeconds: 30 * 24 * 60 * 60, // Cache for 30 days
          },
        },
      },
      {
        urlPattern: /\.(?:js|css)$/,
        handler: 'CacheFirst',
        options: {
          cacheName: 'static-resources',
          expiration: {
            maxEntries: 100,
            maxAgeSeconds: 60 * 60 * 24 * 30,
          },
        },
      },
    ],
  },
  experimental: {
    optimizePackageImports: true,
  },
};

const withNextIntl = createNextIntlPlugin();

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

// Combine all the plugins together
export default withNextIntl(withPWA(bundleAnalyzer(nextConfig)));
