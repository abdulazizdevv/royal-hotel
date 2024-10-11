import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Room from '@/app/[locale]/_assets/images/room.jpg';
import Cards from '../RoomsCard';

const OurRooms = () => {
  const data = [
    {
      id: 1,
      img: Room,
      title: 'Bed Room',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      id: 2,
      img: Room,
      title: 'Bed Room',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      id: 3,
      img: Room,
      title: 'Bed Room',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      id: 4,
      img: Room,
      title: 'Bed Room',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      id: 5,
      img: Room,
      title: 'Bed Room',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
    {
      id: 6,
      img: Room,
      title: 'Bed Room',
      text: 'If you are going to use a passage of Lorem Ipsum, you need to be sure there',
    },
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
