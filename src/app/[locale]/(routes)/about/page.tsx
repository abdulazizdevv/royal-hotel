'use client';
import {
  Box,
  Button,
  Container,
  Grid,
  GridItem,
  Heading,
  Text,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import AboutImg from '@/app/[locale]/_assets/images/about.jpg';
import Image from 'next/image';
import './styles.scss';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `Добро пожаловать в Royal Gardens — семейный курорт, расположенный в живописном Бостанлыкском районе, всего в 65 км от города. Наш отель предлагает комфортное размещение в 18 номерах и 8 коттеджах, рассчитанных на прием до 90 гостей. Мы гордимся разнообразием наших услуг и возможностей для отдыха: пять категорий современных номеров, крытый и открытый бассейны с джакузи и захватывающим панорамным видом на горы, два ресторана, эко-ферма с катанием на лошадях и верблюдах. Для релаксации гостей мы предлагаем турецкий хаммам, японскую сауну, солевую пещеру и финскую сауну. Активный отдых обеспечат футбольное поле, тренажерный зал, а также открытые и закрытые детские площадки. Любители приключений смогут насладиться катанием на zip line и американских горках. Также в нашем распоряжении массажный кабинет, конференц-зал и просторная парковка для вашего удобства.`;

  const truncatedText = fullText.slice(0, 400);
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
              {isExpanded ? fullText : `${truncatedText}...`}
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
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? 'Show less' : 'Read more'}
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
