import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import Room from '@/app/[locale]/_assets/images/room.jpg';
import Cards from '../../_components/RoomsCard';

const Rooms = () => {
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
    <>
      <Box bg={'dark.500'} textAlign={'center'} color={'#fff'}>
        <Heading textTransform={'uppercase'} py={{ base: 4, md: 8 }}>
          Our Room
        </Heading>
      </Box>
      <Box
        my={{ base: 8, md: 16 }}
        bg={'gray.300'}
        py={{ base: '30px', md: '60px' }}
      >
        <Center flexDir={'column'} fontWeight={600} fontSize={18} gap={3}>
          <Text textAlign={'center'}>
            Lorem Ipsum available, but the majority have suffered
          </Text>
        </Center>
        <Container>
          <Box mt={8}>
            <Cards data={data} />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Rooms;
