import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Providers from "./providers";
import Header from "./_layout/Header";
import Footer from "./_layout/Footer";
import "./globals.css";

type Props = {
  params: { _locale: string; slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({ params: { _locale } }: Props) {
  try {
    const t = await getTranslations({ _locale, namespace: "seo" });

    const title = t("main_title");
    const description = t("main_text");

    return {
      title,
      description,
      generator: "Next.js",
      applicationName: "Royal garden",
      referrer: "origin-when-cross-origin",
      keywords: ["royal garden", "garden", "hotel", "tashkent"],
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      robots: {
        index: true,
        follow: true,
      },
      // metadataBase: new URL(process.env.NEXT_PUBLIC_DOMAIN as string),
      // alternates: {
      //   canonical: `${process.env.NEXT_PUBLIC_DOMAIN}`,
      //   languages: {
      //     en: `${process.env.NEXT_PUBLIC_DOMAIN}/en`,
      //     ru: `${process.env.NEXT_PUBLIC_DOMAIN}/ru`,
      //     uz: `${process.env.NEXT_PUBLIC_DOMAIN}/uz`,
      //   },
      // },
      openGraph: {
        // images: '/images/maxway_cover.png',
        type: "website",
        siteName: "Royal Garden",
        title: title || "Royal Garden",
        description: description,
      },
      manifest: "/site.webmanifest.json",
    };
  } catch (_error: any) {
    return {
      title: "Royal garden",
      description: "Royal garden",
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
