'use client';
import React, { useState } from 'react';
import './styles.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
// import banner from '@/app/[locale]/_assets/images/banner.jpg';
import banner2 from '@/app/[locale]/_assets/images/banner2.jpg';
import Image from 'next/image';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    loop: true,

    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  return (
    <div className='relative'>
      <div className='navigation-wrapper '>
        <div ref={sliderRef} className='keen-slider '>
          <div className='keen-slider__slide max-h-[80vh]  w-full'>
            <Image
              src={banner2}
              alt='banner2'
              placeholder='blur'
              loading='eager'
              width={1920}
              height={1080}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 1920px'
              className='w-full'
              priority
            />
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className={'dots'}>
          {Array.from(
            Array(instanceRef.current.track.details.slides.length).keys()
          ).map((idx) => (
            <button
              key={idx}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={'dot' + (currentSlide === idx ? ' active' : '')}
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSection;
