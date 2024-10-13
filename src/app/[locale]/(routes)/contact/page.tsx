import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  Heading,
  Input,
  SimpleGrid,
  Textarea,
} from '@chakra-ui/react';
import React from 'react';

const ContactsPage = () => {
  return (
    <>
      <Box bg={'dark.500'} textAlign={'center'} color={'#fff'}>
        <Heading textTransform={'uppercase'} py={{ base: 4, md: 8 }}>
          Contact us
        </Heading>
      </Box>
      <Container py={{ base: '40px', md: '80px' }}>
        <SimpleGrid columns={{ base: 1, md: 2 }} mt={8} gap={8}>
          <Flex gap={5} flexDirection={'column'}>
            <FormControl shadow={'md'}>
              <Input
                height={'58px'}
                rounded={0}
                type='text'
                placeholder={'Name'}
              />
            </FormControl>
            <FormControl shadow={'md'}>
              <Input
                rounded={0}
                height={'58px'}
                type='email'
                placeholder={'Email'}
              />
            </FormControl>
            <FormControl shadow={'md'}>
              <Input
                rounded={0}
                height={'58px'}
                type='tel'
                placeholder={'Phone number'}
              />
            </FormControl>
            <FormControl shadow={'md'}>
              <Textarea
                rounded={0}
                height={'165px'}
                placeholder={'Message'}
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
            >
              Send
            </Button>
          </Flex>
          <Box>
            <iframe
              src='https://yandex.uz/map-widget/v1/-/CDXgAZ2b'
              className='max-w-[600px] w-full'
              height='400'
              loading='lazy'
            ></iframe>
          </Box>
        </SimpleGrid>
      </Container>
    </>
  );
};

export default ContactsPage;
