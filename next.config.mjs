import createNextIntlPlugin from 'next-intl/plugin';
import withPWA from 'next-pwa';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 86400,
  },
  pwa: {
    dest: 'public',
    // register: true,
    // skipWaiting: true,
    // disable: f
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withPWA(nextConfig));
