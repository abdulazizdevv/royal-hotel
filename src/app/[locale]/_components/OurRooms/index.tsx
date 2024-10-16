import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import economy from '@/app/[locale]/_assets/images/rooms/ekonom.jpg';
import lukus from '@/app/[locale]/_assets/images/rooms/luuks.jpg';
import polLukus from '@/app/[locale]/_assets/images/rooms/polLuks.jpg';
import standart from '@/app/[locale]/_assets/images/rooms/standart.jpg';
import threeplace from '@/app/[locale]/_assets/images/rooms/threeplace.jpg';
import Cards from '../RoomsCard';

const OurRooms = () => {
  const data = [
    {
      id: 1,
      img: lukus,
      title: 'Люкс',
      text: 'Номер оснащен двумя односпальными кроватями или одной двуспальной кроватью с панорамными окнами и видом на горы,зоной отдыха, рабочим столом, шкафом, IP телевидением, просторный душевой кабиной, минибаром, электронным  сейфом, чайными принадлежностями. А так же с личным балконом выходящий на прекрасный вид. Номер укомплектован халатами, тапочках и, косметическими средствами и феном',
    },
    {
      id: 2,
      img: polLukus,
      title: 'Полу люкс',
      text: 'Номер оснащен двумя односпальными кроватями или одной двуспальной кроватью с панорамными окнами и видом на горы,зоной отдыха, рабочим столом, шкафом, IP телевидением, просторный душевой кабиной, минибаром, электронным  сейфом, чайными принадлежностями.Номер укомплектован халатами, тапочках и, косметическими средствами и феном.',
    },
    {
      id: 3,
      img: threeplace,
      title: 'Трехместный номер',
      text: ' Номер оснащен одной двуспальной и одной односпальной кроватью с панорамными окнами и видом на горы,зоной отдыха, рабочим столом, шкафом, IP телевидением, просторный душевой кабиной, минибаром, электронным  сейфом, чайными принадлежностями. Номер укомплектован халатами, тапочках и, косметическими средствами и феном.',
    },
    {
      id: 4,
      img: standart,
      title: 'Стандарт',
      text: 'В стандартном двухместном номере с раздельными кроватями и двуспальной кроватью -есть все необходимое для комфортного отдыха.Номер оснащён двумя раздельными кроватями или с одной двуспальной кроватью, зоной отдыха, рабочим столом, шкафом, IP телевидением , просторной душевой комнатой, минибаром, электронным сейфом , чайными принадлежностями.Номер укомплектован халатами, тапочками , косметическими средствами и феном. В каждом номере работает беспроводной интернет WI-FI.',
    },
    {
      id: 5,
      img: economy,
      title: 'Эконом',
      text: 'Номер оснащен двумя односпальными кроватями.зоной отдыха, рабочим столом, шкафом, IP телевидением, просторный душевой кабиной, минибаром, электронным  сейфом, чайными принадлежностями.Номер укомплектован халатами, тапочках и, косметическими средствами и феном.',
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
        <Heading>Our Room</Heading>
        <Text>Lorem Ipsum available, but the majority have suffered</Text>
      </Center>
      <Box mt={8}>
        <Cards data={data} />
      </Box>
    </Container>
  );
};

export default OurRooms;
