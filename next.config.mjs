import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    minimumCacheTTL: 86400,
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
