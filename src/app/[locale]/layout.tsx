import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import Providers from './providers';
import Header from './_layout/Header';
import Footer from './_layout/Footer';
import './globals.css';

type Props = {
  params: { _locale: string; slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params: { _locale } }: Props) {
  try {
    return {
      title: 'Royal garden',
      description: 'Royal garden',
      generator: 'Next.js',
      applicationName: 'Royal garden',
      referrer: 'origin-when-cross-origin',
      keywords: ['royal garden', 'garden', 'hotel', 'tashkent'],
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      robots: {
        index: true,
        follow: true,
      },
      openGraph: {
        images: '/images/maxway_cover.png',
        type: 'website',
        siteName: 'Maxway',
        title: 'Royal garden',
        description: 'Royal garden',
      },
    };
  } catch (_error: any) {
    return {
      title: 'Royal garden',
      description: 'Royal garden',
    };
  }
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Providers>
            <Header />
            {children}
            <Footer />
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
