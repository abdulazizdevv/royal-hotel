import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Cards from '../../_components/RoomsCard';
import ballon from '@/app/[locale]/_assets/images/entertainment/baloon.jpg';
import forest from '@/app/[locale]/_assets/images/entertainment/forest.jpg';
import zipline from '@/app/[locale]/_assets/images/entertainment/zipline.jpg';
import camel from '@/app/[locale]/_assets/images/entertainment/camel.jpg';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import EntertainmentForm from '../../_components/EntertainmentForm';

export async function generateMetadata({ params: { locale } }: any) {
  try {
    const t = await getTranslations({ locale, namespace: 'seo' });
    const tAbout = await getTranslations({ locale, namespace: 'langs' });

    const title = tAbout('entertainment');
    const description = t('main_text');

    return {
      title,
      description,
      alternates: {
        canonical: `${process.env.NEXT_PUBLIC_DOMAIN}/entertainment`,
        languages: {
          en: `${process.env.NEXT_PUBLIC_DOMAIN}/en/entertainment`,
          ru: `${process.env.NEXT_PUBLIC_DOMAIN}/ru/entertainment`,
          uz: `${process.env.NEXT_PUBLIC_DOMAIN}/uz/entertainment`,
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

const Entertainment = () => {
  const t = useTranslations('langs');

  const data = [
    {
      id: 1,
      img: ballon,
      text: t('entertainment_ballon'),
    },
    {
      id: 2,
      img: forest,
      text: t('entertainment_forest'),
    },
    {
      id: 3,
      img: zipline,
      text: t('entertainment_zipline'),
    },
    {
      id: 4,
      img: camel,
      text: t('entertainment_camel'),
    },

    // {
    //   id: 5,
    //   img: Room,
    //   title: 'Bed Room',
    //   text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    // },
    // {
    //   id: 6,
    //   img: Room,
    //   title: 'Bed Room',
    //   text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    // },
  ];
  return (
    <>
      <Box bg={'dark.500'} textAlign={'center'} color={'#fff'}>
        <Heading textTransform={'uppercase'} py={{ base: 4, md: 8 }}>
          {t('entertainment')}
        </Heading>
      </Box>
      <Box bg={'gray.300'} py={{ base: '30px', md: '60px' }}>
        <Center>
          <Text maxW={'600px'} textAlign={'center'}>
            {t('entertainment_title')}
          </Text>
        </Center>
        <Container my={{ base: 8, md: 16 }}>
          <Box mt={8}>
            <Cards data={data} height='250px' />
          </Box>
          <Heading
            textAlign={'center'}
            textTransform={'uppercase'}
            py={{ base: 8, md: 16 }}
          >
            {t('leave_request')}
          </Heading>
          <EntertainmentForm />
        </Container>
      </Box>
    </>
  );
};

export default Entertainment;
