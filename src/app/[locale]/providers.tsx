'use client';

import React from 'react';
import { ChakraProvider, Stack } from '@chakra-ui/react';
import { theme } from './_theme';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ChakraProvider theme={theme}>
      <Stack gap={0} minH='100vh'>
        {children}
      </Stack>
    </ChakraProvider>
  );
}
