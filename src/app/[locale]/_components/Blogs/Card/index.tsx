import { Box, Card, Grid, GridItem, Text } from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';
import { IBlogsCard } from '@/app/[locale]/_types';

const BlogCard = ({ data }: { data: IBlogsCard[] }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',
        md: 'repeat(2, 1fr)',
        lg: 'repeat(3, 1fr)',
      }}
      gap={6}
    >
      {data?.map((el) => (
        <GridItem key={el.id}>
          <Card
            borderRadius={0}
            cursor={'pointer'}
            _hover={{
              boxShadow: '0px 0px 30px rgba(255, 9, 9, 0.15)',
              transition: 'all 0.2s ease-in-out',
            }}
          >
            <div className='image-container w-full'>
              <Image src={el?.img} alt='Room' className='zoom-image w-full' />
            </div>
            <Box p={6} textAlign={'start'}>
              <Text fontSize={28} fontWeight={600}>
                {el?.title}
              </Text>
              <Text fontSize={14} my={1} color={'red'} fontWeight={700}>
                {el?.subTitle}
              </Text>
              <Text textAlign={'start'} color={'gray.400'} fontWeight={500}>
                {el?.text}
              </Text>
            </Box>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
};

export default BlogCard;
