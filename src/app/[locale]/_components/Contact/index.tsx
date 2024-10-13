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

const ContactSection = () => {
  return (
    <Container py={{ base: '40px', md: '80px' }}>
      <Heading textTransform={'uppercase'} textAlign={'center'}>
        Contact us
      </Heading>
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
            Submit
          </Button>
        </Flex>
        <Box>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11928.138815035629!2d69.8975194!3d41.6333813!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38af17f59afb7c2f%3A0x1d7b984c69aeaec3!2sRoyal%20Gardens!5e0!3m2!1sen!2s!4v1728578441524!5m2!1sen!2s'
            className='max-w-[600px] w-full'
            height='400'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </Box>
      </SimpleGrid>
    </Container>
  );
};

export default ContactSection;
