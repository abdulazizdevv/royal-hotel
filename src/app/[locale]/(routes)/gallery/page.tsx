import { Box, Container, Grid, GridItem, Heading } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import Img1 from '@/app/[locale]/_assets/images/gallery/gallery1.jpg';
import Img2 from '@/app/[locale]/_assets/images/gallery/gallery2.jpg';
import Img3 from '@/app/[locale]/_assets/images/gallery/gallery3.jpg';
import Img4 from '@/app/[locale]/_assets/images/gallery/gallery4.jpg';
import Img5 from '@/app/[locale]/_assets/images/gallery/gallery5.jpg';
import Img6 from '@/app/[locale]/_assets/images/gallery/gallery6.jpg';
import Img7 from '@/app/[locale]/_assets/images/gallery/gallery7.jpg';
import Img8 from '@/app/[locale]/_assets/images/gallery/gallery8.jpg';

const Gallery = () => {
  const data = [
    {
      id: 1,
      img: Img1,
    },
    {
      id: 2,
      img: Img2,
    },
    {
      id: 3,
      img: Img3,
    },
    {
      id: 4,
      img: Img4,
    },
    {
      id: 5,
      img: Img5,
    },
    {
      id: 6,
      img: Img6,
    },
    {
      id: 7,
      img: Img7,
    },
    {
      id: 8,
      img: Img8,
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
                    className='zoom-image h-[262px] w-full object-cover'
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
