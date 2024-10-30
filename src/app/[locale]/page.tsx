import dynamic from 'next/dynamic';
import { Box } from '@chakra-ui/react';
// import HeroSection from './_components/Hero';
// import OurRooms from './_components/OurRooms';
// import AboutSection from './_components/About';
// import GallerySection from './_components/Gallery';
// import ContactSection from './_components/Contact';
// import Entertainment from './_components/Entertainment';
const HeroSection = dynamic(() => import('./_components/Hero'));
const AboutSection = dynamic(() => import('./_components/About'));
const OurRooms = dynamic(() => import('./_components/OurRooms'));
const GallerySection = dynamic(() => import('./_components/Gallery'));
const ContactSection = dynamic(() => import('./_components/Contact'));
const Entertainment = dynamic(() => import('./_components/Entertainment'));

export default function HomePage() {
  return (
    <>
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
    </>
  );
}
