import { Box, Container, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';
import './style.scss';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const t = useTranslations('langs');

  return (
    <Box bg={'#333333'} color={'#fff'} py={{ base: '40px', md: '80px' }}>
      <Container>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={4}>
          <Flex flexDir={'column'} gap={4}>
            <Text
              fontWeight={600}
              fontSize={25}
              borderBottom={'3px solid red'}
              w={'fit-content'}
            >
              {t('contact')}
            </Text>
            <Link className='links' href='/'>
              <Icon icon='mdi:location' width='1.2em' height='1.2em' />
              Bo`stonliq tumani, Toshkent viloyati,
            </Link>
            <Link className='links' href='tel:+998940401427'>
              <Icon icon='ic:baseline-phone' width='1.2em' height='1.2em' />
              +998 94 040 14 27
            </Link>
            <Link className='links' href='mailto:test@gmail.com'>
              <Icon icon='material-symbols:mail' width='1.2em' height='1.2em' />
              test@gmail.com
            </Link>
          </Flex>
          <Flex flexDir={'column'} gap={2}>
            <Text
              fontWeight={600}
              fontSize={25}
              borderBottom={'3px solid red'}
              w={'fit-content'}
            >
              {t('menu_links')}
            </Text>
            <Link className='links' href='/'>
              {t('home')}
            </Link>
            <Link className='links' href='/about'>
              {t('about')}
            </Link>
            <Link className='links' href='/our-rooms'>
              {t('room')}
            </Link>
            <Link className='links' href='/gallery'>
              {t('gallery')}
            </Link>
            {/* <Link className='links' href='/blog'>
              {t('blogs')}
            </Link> */}
            <Link className='links' href='/contacts'>
              {t('contact')}
            </Link>
          </Flex>
          <Flex flexDir={'column'} gap={4}>
            <Text
              fontWeight={600}
              fontSize={25}
              borderBottom={'3px solid red'}
              w={'fit-content'}
            >
              {t('social_media')}
            </Text>
            <Flex gap={4} fontSize={28}>
              <Link className='links' href='#'>
                <Icon icon='brandico:facebook' width='1.2em' height='1.2em' />
              </Link>
              <Link
                className='links'
                href='https://www.instagram.com/royalgardens.uz?igsh=MXJyaGtjNGRyd2RqeA%3D%3D'
              >
                <Icon icon='ri:instagram-line' width='1.2em' height='1.2em' />
              </Link>
              <Link
                className='links'
                href='https://www.instagram.com/royalgardens.uz?igsh=MXJyaGtjNGRyd2RqeA%3D%3D'
              >
                <Icon
                  icon='icon-park-outline:telegram'
                  width='1.2em'
                  height='1.2em'
                />
              </Link>
              <Link
                className='links'
                href='https://www.instagram.com/royalgardens.uz?igsh=MXJyaGtjNGRyd2RqeA%3D%3D'
              >
                <Icon icon='mdi:linkedin' width='1.2em' height='1.2em' />
              </Link>
            </Flex>
          </Flex>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Footer;
