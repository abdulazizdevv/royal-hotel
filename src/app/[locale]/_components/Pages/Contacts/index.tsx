import React from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import ContactForm from '../../ContactForm';

const ContactsPage = () => {
  const t = useTranslations('langs');

  return (
    <>
      <Box bg={'dark.500'} textAlign={'center'} color={'#fff'}>
        <Heading textTransform={'uppercase'} py={{ base: 4, md: 8 }}>
          {t('contact')}
        </Heading>
      </Box>
      <Container py={{ base: '40px', md: '80px' }}>
        <ContactForm />
      </Container>
    </>
  );
};

export default ContactsPage;
