"use client";

import React from "react";
import { ChakraProvider, Stack } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "./_theme";

const queryClient = new QueryClient();

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    // <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={theme}>
        <Stack gap={0} minH="100vh">
          {children}
        </Stack>
      </ChakraProvider>
    </QueryClientProvider>
    // </Provider>
  );
}
