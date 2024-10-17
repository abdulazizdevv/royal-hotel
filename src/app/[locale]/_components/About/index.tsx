'use client';
import {
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
import { useTranslations } from 'next-intl';

const AboutSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations('langs');

  return (
    <Container my={{ base: '40px', md: '80px' }}>
      <Grid
        templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(5, 1fr)' }} // 3 columns on large screens
        gap={6}
      >
        <GridItem colSpan={{ base: 1, lg: 2 }}>
          <Heading textTransform={'uppercase'} mb={{ base: 4, md: 6 }}>
            {t('about')}
          </Heading>
          <Text
            fontSize={'18px'}
            color={'gray.400'}
            dangerouslySetInnerHTML={{
              __html: isExpanded
                ? t.raw('about_text')
                : t.raw('about_text')?.substring(0, 400) + '...',
            }}
          />

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
            {isExpanded ? t('show_less') : t('read_more')}
          </Button>
        </GridItem>

        <GridItem colSpan={{ base: 1, lg: 3 }}>
          <div className='image-container w-full'>
            <Image
              src={AboutImg}
              alt='about'
              className='zoom-image h-[450px] object-cover w-full'
            />
          </div>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default AboutSection;
