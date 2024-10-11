import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Img from '@/app/[locale]/_assets/images/gallery1.jpg';

const Gallery = () => {
  const data = [
    {
      id: 1,
      img: Img,
    },
    {
      id: 2,
      img: Img,
    },
    {
      id: 3,
      img: Img,
    },
    {
      id: 4,
      img: Img,
    },
    {
      id: 5,
      img: Img,
    },
    {
      id: 6,
      img: Img,
    },
    {
      id: 7,
      img: Img,
    },
    {
      id: 8,
      img: Img,
    },
  ];
  return (
    <>
      <Box bg={'dark.500'} textAlign={'center'} color={'#fff'}>
        <Heading textTransform={'uppercase'} py={{ base: 4, md: 8 }}>
          Gallery
        </Heading>
      </Box>
      <Container py={{ base: '40px', md: '80px' }}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
            lg: 'repeat(3, 1fr)',
            xl: 'repeat(4, 1fr)',
          }}
          gap={8}
        >
          {data?.map((el) => (
            <GridItem key={el.id}>
              <Box>
                <div className='image-container max-h-[262px] w-full'>
                  <Image
                    src={el?.img}
                    alt='Room'
                    className='zoom-image w-full'
                  />
                </div>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default Gallery;