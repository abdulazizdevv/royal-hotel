import { Card, Center, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { IRoomsCard } from '@/app/[locale]/_types';
import { useLocale } from 'next-intl';

const Cards = ({ data, height }: { data: IRoomsCard[]; height?: string }) => {
  const currentLocale = useLocale();
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
              <Image
                placeholder='blur'
                src={el?.img}
                alt='Room'
                className='zoom-image object-cover h-[222px] w-full'
              />
            </div>
            <Center flexDir={'column'} textAlign={'center'} p={5}>
              {el?.title && (
                <Text fontSize={28} fontWeight={600}>
                  {el?.title}
                </Text>
              )}
              <Text
                maxW={'320px'}
                h={
                  height
                    ? height
                    : currentLocale === 'uz' || currentLocale === 'en'
                    ? '280px'
                    : '350px'
                }
                textAlign={'start'}
              >
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
