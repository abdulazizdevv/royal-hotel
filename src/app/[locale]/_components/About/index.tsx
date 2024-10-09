import { Container, Grid, GridItem, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import AboutImg from '@/app/[locale]/_assets/images/about.png';
import Image from 'next/image';
import './styles.scss';

const AboutSection = () => {
  return (
    <Container my={{ base: '40px', md: '80px' }}>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}
        gap={6}
      >
        <GridItem>
          <Heading textTransform={'uppercase'} mb={{ base: 4, md: 8 }}>
            About Us
          </Heading>
          <Text fontSize={'18px'}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
            eaque reiciendis, mollitia eum et officia consequatur omnis repellat
            placeat. Quisquam cumque fuga nemo accusantium quas impedit ullam
            fugit provident quos maxime nam eligendi placeat, voluptas officiis
            perferendis ea ipsa voluptate adipisci officia? Voluptas porro quae
            laborum magni voluptatibus! Ut saepe libero facilis impedit velit
            minus sequi, repellat nesciunt laborum reiciendis eius ab illum
            ipsum quisquam nisi reprehenderit! Perferendis veniam molestiae sit,
            illum vitae reprehenderit nostrum deleniti accusantium quos iure
            asperiores quam natus magnam officia quis architecto odit officiis
            tempore?
          </Text>
        </GridItem>
        <GridItem>
          <div className='image-container'>
            <Image src={AboutImg} alt='about' className='zoom-image' />
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default AboutSection;
