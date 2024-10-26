import { Box, Center, Container, Heading } from '@chakra-ui/react';
import React from 'react';
import economy from '@/app/[locale]/_assets/images/rooms/ekonom.jpg';
import lukus from '@/app/[locale]/_assets/images/rooms/luuks.jpg';
import polLukus from '@/app/[locale]/_assets/images/rooms/polLuks.jpg';
import standart from '@/app/[locale]/_assets/images/rooms/standart.jpg';
import threeplace from '@/app/[locale]/_assets/images/rooms/threeplace.jpg';
import Cards from '../RoomsCard';
import { useLocale, useTranslations } from 'next-intl';

const OurRooms = () => {
  const t = useTranslations('langs');
  const currentLocale = useLocale();

  const data = [
    {
      id: 1,
      img: lukus,
      title: t('lux'),
      text: t('lux_text'),
    },
    {
      id: 2,
      img: polLukus,
      title: t('pol_lux'),
      text: t('pol_lux_text'),
    },
    {
      id: 3,
      img: threeplace,
      title: t('triple_room'),
      text: t('triple_room_text'),
    },
    {
      id: 4,
      img: standart,
      title: t('standard'),
      text: t('standard_text'),
    },
    {
      id: 5,
      img: economy,
      title: t('economy'),
      text: t('economy_text'),
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
    <Container>
      <Center flexDir={'column'} gap={3}>
        <Heading>{t('room')}</Heading>
      </Center>
      <Box mt={8}>
        <Cards
          data={data}
          height={
            currentLocale === 'uz' || currentLocale === 'en' ? '280px' : '350px'
          }
        />
      </Box>
    </Container>
  );
};

export default OurRooms;
