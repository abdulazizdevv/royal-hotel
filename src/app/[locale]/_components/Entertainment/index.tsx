import { Box, Center, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import ballon from '@/app/[locale]/_assets/images/entertainment/baloon.jpg';
import forest from '@/app/[locale]/_assets/images/entertainment/forest.jpg';
import zipline from '@/app/[locale]/_assets/images/entertainment/zipline.jpg';
import camel from '@/app/[locale]/_assets/images/entertainment/camel.jpg';
import Cards from '../RoomsCard';
import { useTranslations } from 'next-intl';

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
    <Container my={8}>
      <Center flexDir={'column'} gap={3}>
        <Heading>{t('entertainment')}</Heading>
      </Center>
      <Box mt={8}>
        <Cards data={data} height='200px' />
      </Box>
    </Container>
  );
};

export default Entertainment;
