'use client';
import {
  Button,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Stack,
  useDisclosure,
  useMediaQuery,
} from '@chakra-ui/react';
import React from 'react';
import logo from '@/app/[locale]/_assets/images/logo.jpg';
import Image from 'next/image';
import './header.scss';
import { Icon } from '@iconify/react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import LanguageSwitch from '../../_components/LanguageSwitch';
import LanguageDrawer from './LanguageDrawer';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMd] = useMediaQuery('(max-width: 768px)');
  const t = useTranslations('langs');

  const links = [
    { id: 'drawer-menu', label: t('home'), link: '/' },
    { id: 'drawer-about', label: t('about'), link: '/about' },
    { id: 'drawer-room', label: t('room'), link: '/room' },
    { id: 'drawer-gallery', label: t('gallery'), link: '/gallery' },
    // { id: 'drawer-blog', label: t('blogs'), link: '/blog' },
    { id: 'drawer-contact', label: t('contact'), link: '/contact' },
  ];

  return (
    <Stack position={'relative'} borderBottom={'1px solid #eee'} shadow={'sm'}>
      <Container py={2} as='header'>
        <Flex justifyContent={'space-between'} alignItems={'center'}>
          <Link href={'/'} className='w-[80px] h-[80px] block relative'>
            <Image src={logo} alt='logo' fill />
          </Link>
          {isMd ? (
            <Button variant={'ghost'} onClick={onOpen}>
              <Icon icon='ri:menu-3-line' width='25px' height='25px' />
            </Button>
          ) : (
            <Flex gap={8} fontWeight={600} fontSize={20} alignItems={'center'}>
              {links?.map((el) => (
                <Link
                  key={el.id}
                  className='custom-link uppercase'
                  href={el?.link}
                >
                  {el?.label}
                </Link>
              ))}
              <LanguageSwitch />
            </Flex>
          )}
        </Flex>
      </Container>
      <Drawer isOpen={isOpen} placement='right' onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Menu</DrawerHeader>

          <DrawerBody>
            <LanguageDrawer />
            <Flex flexDir={'column'} gap={4}>
              {links?.map((el) => (
                <Link
                  className='drawer-link'
                  key={el.id}
                  href={el?.link}
                  onClick={onClose} // Close drawer on link click
                >
                  {el?.label}
                </Link>
              ))}
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Stack>
  );
};

export default Header;
