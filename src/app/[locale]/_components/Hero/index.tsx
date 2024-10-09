'use client';
import React, { useState } from 'react';
import './styles.scss';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import banner1 from '@/app/[locale]/_assets/images/banner1.jpg';
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
            <Image src={banner1} alt='banner' className='w-full' />
          </div>
          <div className='keen-slider__slide max-h-[80vh]  w-full'>
            <Image src={banner2} alt='banner2' className='w-full' />
          </div>
        </div>
      </div>
      {loaded && instanceRef.current && (
        <div className='dots'>
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
