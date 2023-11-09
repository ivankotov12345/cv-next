'use client'
import { useContext, useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Swiper, SwiperSlide, SwiperClass } from 'swiper/react';
import { Controller } from 'swiper/modules';

import ModalWindow from '../modal-window/modal-window';

import { Paths } from '@/enums/paths';
import { Context } from '@/context/context';

import 'swiper/css';
import styles from './slider.module.scss';

export default function Slider ({ children }: {children: React.ReactNode}) {
  const { 
    isModalOpen, 
    controlledSwiper, 
    setControlledSwiper, } = useContext(Context);

  const pathname = usePathname();
  const router = useRouter();

  const routesArr = Object.values(Paths);
  const currentIndex = routesArr.findIndex(item => item === pathname);

  useEffect(() => {
    if(controlledSwiper) {
      controlledSwiper.slideTo(currentIndex, 0);
    }
  }, [currentIndex, controlledSwiper]);


  const handleChangeSlide = (swiper: SwiperClass) => {
    const indexRoute = swiper.activeIndex;
    router.push(routesArr[indexRoute]);
  };
  return (
    <>
    {isModalOpen && <ModalWindow />}
    <div className={styles.slider_wrapper}>
      <Swiper
      modules={[Controller]}
        spaceBetween={0}
        slidesPerView={1}
        onSlideChange={(swiper: SwiperClass) => handleChangeSlide(swiper)}
        onSwiper={setControlledSwiper}
        className={styles.swiper}
        >

      { routesArr.map(node => (
        <SwiperSlide key={node}>
        { pathname === node ? children : <div /> }
        </SwiperSlide>
      )) }

      </Swiper>
    </div>
    </>
  )
}
