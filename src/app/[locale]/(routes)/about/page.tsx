import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import AboutImg from '@/app/[locale]/_assets/images/about.png';
import Image from 'next/image';
import './styles.scss';

const About = () => {
  return (
    <>
      <Box bg={'dark.500'} textAlign={'center'} color={'#fff'}>
        <Heading textTransform={'uppercase'} py={{ base: 4, md: 8 }}>
          About Us
        </Heading>
      </Box>
      <Container my={{ base: '40px', md: '80px' }}>
        <Grid
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }}
          gap={6}
        >
          <GridItem colSpan={{ base: 1, lg: 2 }}>
            <Text fontSize={'18px'} color={'gray.400'}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatem eaque reiciendis, mollitia eum et officia consequatur
              omnis repellat placeat. Quisquam cumque fuga nemo accusantium quas
              impedit ullam fugit provident quos maxime nam eligendi placeat,
              voluptas officiis perferendis ea ipsa voluptate adipisci officia?
              Voluptas porro quae ipsum quisquam nisi reprehenderit! Perferendis
              veniam molestiae sit,
            </Text>
            <Button
              mt={5}
              bg='black'
              color='white'
              _hover={{ bg: 'gray.700' }}
              _active={{ bg: 'gray.800' }}
              padding={5}
              size={'lg'}
              borderRadius={'full'}
            >
              Read more
            </Button>
          </GridItem>

          <GridItem colSpan={{ base: 1, lg: 3 }}>
            <div className='image-container w-full'>
              <Image src={AboutImg} alt='about' className='zoom-image w-full' />
            </div>
          </GridItem>
        </Grid>
      </Container>
    </>
  );
};

export default About;
