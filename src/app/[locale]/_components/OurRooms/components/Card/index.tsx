import { Card, Center, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { IRoomsCard } from '@/app/[locale]/_types';

const Cards = ({ data }: { data: IRoomsCard[] }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={6}
    >
      {data?.map((el) => (
        <GridItem key={el.id}>
          <Card
            cursor={'pointer'}
            _hover={{
              boxShadow: '0px 0px 30px rgba(255, 9, 9, 0.15)', // Red shadow effect
              transition: 'all 0.2s ease-in-out', // Smooth transition
            }}
          >
            <div className='image-container w-full'>
              <Image src={el?.img} alt='Room' className='zoom-image w-full' />
            </div>
            <Center flexDir={'column'} textAlign={'center'} p={5}>
              <Text fontSize={28} fontWeight={600}>
                {el?.title}
              </Text>
              <Text maxW={'270px'} textAlign={'center'}>
                {el?.text}
              </Text>
            </Center>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Cards;
