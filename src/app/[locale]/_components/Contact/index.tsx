import { Container, Heading } from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import React from 'react';
import ContactForm from '../ContactForm';

const ContactSection = () => {
  const t = useTranslations('langs');
  return (
    <Container py={{ base: '40px', md: '80px' }}>
      <Heading textTransform={'uppercase'} textAlign={'center'}>
        {t('contact')}
      </Heading>
      <ContactForm />
    </Container>
  );
};

export default ContactSection;
