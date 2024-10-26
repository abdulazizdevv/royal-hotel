import { Box } from '@chakra-ui/react';
import HeroSection from './_components/Hero';
import AboutSection from './_components/About';
import OurRooms from './_components/OurRooms';
import GallerySection from './_components/Gallery';
import ContactSection from './_components/Contact';
import Entertainment from './_components/Entertainment';

// import im from '@/app/[locale]/_assets/images/blog_bg.jpg'

export default function HomePage() {
  // const t = useTranslations("homePage");
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Box bg={'gray.300'} py={{ base: '40px', md: '80px' }}>
        <OurRooms />
      </Box>
      <GallerySection />
      <Entertainment />
      {/* <Box
        bgImage="url('/images/blog_bg.jpg')"
        bgPosition='center'
        bgRepeat='no-repeat'
        bgSize='cover'
        w='100%'
        maxH='auto'
      >
        <BlogsSection />
      </Box> */}
      <ContactSection />
    </div>
  );
}
