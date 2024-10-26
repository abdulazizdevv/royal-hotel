import { getTranslations } from 'next-intl/server';
import React from 'react';
import ContactsPage from '../../_components/Pages/Contacts';

export async function generateMetadata({ params: { locale } }: any) {
  try {
    const t = await getTranslations({ locale, namespace: 'seo' });
    const tAbout = await getTranslations({ locale, namespace: 'langs' });

    const title = tAbout('contact');
    const description = t('main_text');

    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
        languages: {
          en: `${process.env.NEXT_PUBLIC_DOMAIN}/en/about`,
          ru: `${process.env.NEXT_PUBLIC_DOMAIN}/ru/about`,
          uz: `${process.env.NEXT_PUBLIC_DOMAIN}/uz/about`,
        },
      },
    };
  } catch (_error: any) {
    return {
      title: 'Royal garden',
      description: 'Royal garden',
    };
  }
}

const Contacts = () => {
  return (
    <>
      <ContactsPage />
    </>
  );
};

export default Contacts;
