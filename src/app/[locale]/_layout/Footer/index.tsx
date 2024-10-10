import { Box, Container, Flex, Link, SimpleGrid, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import React from 'react';

const Footer = () => {
  return (
    <Box bg={'dark.800'} color={'#fff'} py={{ base: '40px', md: '80px' }}>
      <Container>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
          <Flex flexDir={'column'} gap={4}>
            <Text
              fontWeight={600}
              fontSize={25}
              borderBottom={'3px solid red'}
              w={'fit-content'}
            >
              Contact us
            </Text>
            <Link
              display={'flex'}
              alignItems={'center'}
              gap={4}
              href='/address'
            >
              <Icon icon='mdi:location' width='1.2em' height='1.2em' />
              Address
            </Link>
            <Link
              display={'flex'}
              alignItems={'center'}
              gap={4}
              href='tel:+998940401427'
            >
              <Icon icon='ic:baseline-phone' width='1.2em' height='1.2em' />
              +998 94 040 14 27
            </Link>
            <Link
              display={'flex'}
              alignItems={'center'}
              gap={4}
              href='mailto:test@gmail.com'
            >
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
              Menu Link
            </Text>
            <Link
              _hover={{ color: 'gray' }}
              display={'flex'}
              alignItems={'center'}
              gap={4}
              href='/'
            >
              Home
            </Link>
            <Link
              _hover={{ color: 'gray' }}
              display={'flex'}
              alignItems={'center'}
              gap={4}
              href='/about'
            >
              About
            </Link>
            <Link
              _hover={{ color: 'gray' }}
              display={'flex'}
              alignItems={'center'}
              gap={4}
              href='/our-rooms'
            >
              Our Room
            </Link>
            <Link
              _hover={{ color: 'gray' }}
              display={'flex'}
              alignItems={'center'}
              gap={4}
              href='/gallery'
            >
              Gallery
            </Link>
            <Link
              _hover={{ color: 'gray' }}
              display={'flex'}
              alignItems={'center'}
              gap={4}
              href='/blog'
            >
              Blog
            </Link>
            <Link
              _hover={{ color: 'gray' }}
              display={'flex'}
              alignItems={'center'}
              gap={4}
              href='/contacts'
            >
              Contact us
            </Link>
          </Flex>
          <Flex flexDir={'column'} gap={4}>
            <Text
              fontWeight={600}
              fontSize={25}
              borderBottom={'3px solid red'}
              w={'fit-content'}
            >
              News letter
            </Text>
            <Flex gap={4} fontSize={28}>
              <Link display={'flex'} alignItems={'center'} gap={4} href='#'>
                <Icon icon='brandico:facebook' width='1.2em' height='1.2em' />
              </Link>
              <Link
                display={'flex'}
                alignItems={'center'}
                gap={4}
                href='https://www.instagram.com/royalgardens.uz?igsh=MXJyaGtjNGRyd2RqeA%3D%3D'
              >
                <Icon icon='ri:instagram-line' width='1.2em' height='1.2em' />
              </Link>
              <Link
                display={'flex'}
                alignItems={'center'}
                gap={4}
                href='https://www.instagram.com/royalgardens.uz?igsh=MXJyaGtjNGRyd2RqeA%3D%3D'
              >
                <Icon
                  icon='icon-park-outline:telegram'
                  width='1.2em'
                  height='1.2em'
                />
              </Link>
              <Link
                display={'flex'}
                alignItems={'center'}
                gap={4}
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
