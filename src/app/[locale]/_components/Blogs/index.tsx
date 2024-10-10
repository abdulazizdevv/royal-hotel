import { Box, Center, Container, Heading, Text } from '@chakra-ui/react';
import React from 'react';
import BlogCard from './Card';
import Room from '@/app/[locale]/_assets/images/blog1.jpg';

const BlogsSection = () => {
  const data = [
    {
      id: 1,
      img: Room,
      title: 'Bed Room',
      subTitle: 'The standard chunk',
      text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you ",
    },
    {
      id: 2,
      img: Room,
      title: 'Bed Room',
      subTitle: 'The standard chunk',
      text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you ",
    },
    {
      id: 3,
      img: Room,
      title: 'Bed Room',
      subTitle: 'The standard chunk',
      text: "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generatorsIf you ",
    },
  ];
  return (
    <Container py={{ base: '40px', md: '80px' }}>
      <Center flexDir={'column'} color={'#fff'}>
        <Heading textTransform={'uppercase'} mb={2}>
          Blog
        </Heading>
        <Text>Lorem Ipsum available, but the majority have suffered</Text>
      </Center>
      <Box mt={8}>
        <BlogCard data={data} />
      </Box>
    </Container>
  );
};

export default BlogsSection;
