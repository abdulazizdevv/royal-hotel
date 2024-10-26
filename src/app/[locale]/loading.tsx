import Image from 'next/image';
import React from 'react';
import loadingImg from '@/app/[locale]/_assets/images/loading.svg';
import { Center } from '@chakra-ui/react';

const Loading = () => {
  return (
    <Center h={'80vh'} zIndex={99}>
      <Image
        src={loadingImg}
        alt='loading'
        width={200}
        height={200}
        className='w-[200px]  h-[200px]'
      />
    </Center>
  );
};

export default Loading;
