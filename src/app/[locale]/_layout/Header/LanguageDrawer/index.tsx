'use client';

import { memo } from 'react';
import { Box, Button, Divider, SimpleGrid } from '@chakra-ui/react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Icon } from '@iconify/react/dist/iconify.js';

function LanguageDrawer() {
  const locale = useLocale();

  const router = useRouter();
  const pathname = usePathname();

  const onChange = (value: 'uz' | 'ru' | 'en') => {
    router.push(pathname, { locale: value });
  };

  return (
    <Box display={{ base: 'block', lg: 'none' }}>
      <Divider mb={2} />
      <SimpleGrid
        // px={4}
        mb={2}
        columns={3}
        spacing={2}
        display={{
          base: 'grid',
          lg: 'none',
        }}
      >
        <Button
          border={locale === 'uz' ? '1px solid #1570EF' : '1px solid #ffffff'}
          variant={'outline'}
          onClick={() => onChange('uz')}
          bg={'#F2F4F7'}
        >
          <Icon
            icon='emojione:flag-for-uzbekistan'
            width='1.2em'
            height='1.2em'
          />
        </Button>
        <Button
          border={locale === 'ru' ? '1px solid #1570EF' : '1px solid #ffffff'}
          variant={'outline'}
          onClick={() => onChange('ru')}
          bg={'#F2F4F7'}
        >
          {/* <Image
            src={ru}
            alt={t('seo.h1_main') + ` - photo 3`}
            width={24}
            height={24}
          /> */}
          <Icon icon='emojione:flag-for-russia' width='1.2em' height='1.2em' />
        </Button>

        <Button
          border={locale === 'en' ? '1px solid #1570EF' : '1px solid #ffffff'}
          variant={'outline'}
          onClick={() => onChange('en')}
          bg={'#F2F4F7'}
        >
          <Icon icon='circle-flags:uk' width='1.2em' height='1.2em' />
        </Button>
      </SimpleGrid>
    </Box>
  );
}

export default memo(LanguageDrawer);
