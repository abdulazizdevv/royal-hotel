'use client';

import { memo, useMemo } from 'react';
import {
  Button,
  Flex,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Stack,
  StackDivider,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react/dist/iconify.js';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';

const langs: { value: 'uz' | 'ru' | 'en'; label: string; flags: any }[] = [
  {
    value: 'uz',
    label: "O'zbekcha",
    flags: (
      <Icon icon='emojione:flag-for-uzbekistan' width='1.2em' height='1.2em' />
    ),
  },
  {
    value: 'ru',
    label: 'Русский',
    flags: (
      <Icon icon='emojione:flag-for-russia' width='1.2em' height='1.2em' />
    ),
  },
  {
    value: 'en',
    label: 'English',
    flags: <Icon icon='circle-flags:uk' width='1.2em' height='1.2em' />,
  },
];

function Language() {
  const { isOpen, onToggle, onClose } = useDisclosure();

  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const selected = useMemo(
    () => langs.find((item) => item.value === locale),
    [locale]
  );

  const onChange = (value: 'uz' | 'ru' | 'en') => {
    router.push(pathname, { locale: value });
  };

  return (
    <Popover isOpen={isOpen} onClose={onClose} placement='bottom-end'>
      <PopoverTrigger>
        <Button
          variant='ghost'
          borderRadius={'12px'}
          gap={1}
          bg={'#EAECF0'}
          onClick={onToggle}
          py={'10px'}
          px={'4px'}
          fontSize={14}
          fontWeight={500}
          color={'#1E1F2E'}
        >
          <Flex align='center' gap={1}>
            {selected?.flags}
            <Text fontSize='xs'>
              {selected?.label === "O'zbekcha"
                ? 'UZ'
                : selected?.label?.substring(0, 2).toUpperCase()}
            </Text>
            <Icon icon='ep:arrow-down' width='1.2em' height='1.2em' />
          </Flex>
        </Button>
      </PopoverTrigger>
      <PopoverContent
        mt={1}
        width='fit-content'
        bgColor='white'
        overflow='hidden'
        borderRadius='16px'
        border='1px solid #00000012'
        _dark={{ bgColor: 'paper.dark.500', borderColor: '#FFFFFF12' }}
      >
        <PopoverBody p={0} borderRadius='16px'>
          <Stack divider={<StackDivider />} spacing={0}>
            {langs.map((item) => (
              <Text
                key={item?.value}
                p={'12px'}
                _hover={{ bg: 'paper.light.300' }}
                fontWeight={600}
                cursor={'pointer'}
                onClick={() => {
                  onChange(item?.value);
                  onClose();
                }}
              >
                {item?.label}
              </Text>
            ))}
          </Stack>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default memo(Language);
