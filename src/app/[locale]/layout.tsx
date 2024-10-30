import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import Providers from './providers';
import './globals.css';
import { Suspense } from 'react';
import Loading from './loading';
import dynamic from 'next/dynamic';

// dynamic
const Header = dynamic(() => import('./_layout/Header'));
const Footer = dynamic(() => import('./_layout/Footer'));

type Props = {
  params: { _locale: string; slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params: { _locale } }: Props) {
  try {
    const t = await getTranslations({ _locale, namespace: 'seo' });
    const title = t('main_title');
    const description = t('main_text');

    return {
      title,
      description,
      generator: 'Next.js',
      applicationName: 'Royal gardens',
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
      metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN as string),
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/ru`,
        languages: {
          en: `${process.env.NEXT_PUBLIC_DOMAIN}/en`,
          ru: `${process.env.NEXT_PUBLIC_DOMAIN}/ru`,
          uz: `${process.env.NEXT_PUBLIC_DOMAIN}/uz`,
        },
      },
      openGraph: {
        url: process.env.NEXT_PUBLIC_DOMAIN,
        images: `${process.env.NEXT_PUBLIC_DOMAIN}/logo.jpg`,
        type: 'website',
        siteName: 'Royal Garden',
        title: title || 'Royal Garden',
        description: description,
      },
      icons: {
        icon: [
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: '/favicon-32x32.png',
          },
          {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: '/favicon-16x16.png',
          },
        ],
        apple: {
          rel: 'apple-touch-icon',
          sizes: '180x180',
          url: '/apple-touch-icon.png',
        },
      },
      manifest: '/site.webmanifest.json',
      verification: {
        google: 'GrvM3j5hzerV-N4iiq1VzyKYHqGoqwBoAWMCVUTQgJQ',
      },
    };
  } catch (error) {
    console.error('Metadata generation error:', error);
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
        <Suspense fallback={<Loading />}>
          <NextIntlClientProvider messages={messages}>
            <Providers>
              <Suspense fallback={<Loading />}>
                <Header />
              </Suspense>
              {children}
              <Suspense fallback={<Loading />}>
                <Footer />
              </Suspense>
            </Providers>
          </NextIntlClientProvider>

          <script
            type='text/javascript'
            dangerouslySetInnerHTML={{
              __html: `
                (function(m,e,t,r,i,k,a){
                  m[i]=m[i]||function(){
                    (m[i].a=m[i].a||[]).push(arguments)
                  };
                  m[i].l=1*new Date();
                  for (var j = 0; j < document.scripts.length; j++) {
                    if (document.scripts[j].src === r) {
                      return;
                    }
                  }
                  k=e.createElement(t),
                  a=e.getElementsByTagName(t)[0],
                  k.async=1,
                  k.src=r,
                  a.parentNode.insertBefore(k,a)
                })(window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

                ym(98737773, "init", {
                  clickmap:true,
                  trackLinks:true,
                  accurateTrackBounce:true,
                  webvisor:true,
                  ecommerce:"dataLayer"
                });
              `,
            }}
          />
          <noscript>
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src='https://mc.yandex.ru/watch/98737773'
                style={{ position: 'absolute', left: '-9999px' }}
                alt='yandex'
              />
            </div>
          </noscript>
        </Suspense>
      </body>
    </html>
  );
}
