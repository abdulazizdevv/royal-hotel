'use client';
import React, { useRef } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  SimpleGrid,
  Textarea,
  useToast,
} from '@chakra-ui/react';
import { useTranslations } from 'next-intl';
import { postMessage } from '../../_services/contact';

const ContactForm = () => {
  const t = useTranslations('langs');
  const toast = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);

    try {
      const res = await postMessage(formData);

      if (res.success) {
        toast({
          title: t('successfully_create'),
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: res?.error || 'Error',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }

      formRef.current?.reset();
    } catch (_error: any) {
      toast({
        title: 'Error',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <div>
      <SimpleGrid columns={{ base: 1, md: 2 }} mt={8} gap={8}>
        <form onSubmit={handleSubmit} ref={formRef}>
          <Flex gap={5} flexDirection={'column'}>
            <FormControl shadow={'md'} isRequired>
              <Input
                height={'58px'}
                rounded={0}
                type='text'
                name='fullName'
                placeholder={t('name')}
              />
            </FormControl>
            <FormControl shadow={'md'}>
              <Input
                rounded={0}
                height={'58px'}
                type='email'
                name='email'
                placeholder={t('email')}
              />
            </FormControl>
            <FormControl shadow={'md'} isRequired>
              <Input
                rounded={0}
                height={'58px'}
                name='phone'
                type='tel'
                placeholder={t('phone_number')}
              />
            </FormControl>
            <FormControl shadow={'md'}>
              <Textarea
                rounded={0}
                name='message'
                height={'165px'}
                placeholder={t('message')}
              ></Textarea>
            </FormControl>
            <Button
              mt={5}
              bg='black'
              color='white'
              _hover={{ bg: 'gray.700' }}
              _active={{ bg: 'gray.800' }}
              padding={5}
              height={'52px'}
              w={'152px'}
              borderRadius={'full'}
              textTransform={'uppercase'}
              type='submit'
            >
              {t('send')}
            </Button>
          </Flex>
        </form>
        <Box>
          <iframe
            src='https://yandex.uz/map-widget/v1/-/CDXgAZ2b'
            className='max-w-[600px] w-full'
            height='400'
            loading='lazy'
          ></iframe>
        </Box>
      </SimpleGrid>
    </div>
  );
};

export default ContactForm;
