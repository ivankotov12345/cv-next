'use client'
import Link from 'next/link';
import { useContext, useRef, useEffect } from 'react';
import { Swiper } from 'swiper/react';
import { Controller } from 'swiper/modules';

import { Context } from '@/context/context'

import { Paths, PathNames } from '@/enums/paths';
import { NavigationPropsType } from '@/prop-types/prop-types';

import styles from './navigation.module.scss';
import 'swiper/css';
import './swiper.scss';



export default function Navigation({ isOpened, setIsOpened, burgerBtnRef }: NavigationPropsType) {
  const { controlledSwiper, } = useContext(Context);

  const navRef = useRef<HTMLUListElement>(null);

  const pathsArr = Object.values(Paths);
  const pathNamesArr = Object.values(PathNames);

  const onNavigationLinkClick = (index: number) => {
    setIsOpened(false);
    if(controlledSwiper) {
      controlledSwiper.slideTo(index);
    }
  }

  const clickOutsideMenu = (event: MouseEvent) => {
    if(isOpened 
        && !navRef.current?.contains(event.target as unknown as Node)
        && !burgerBtnRef.current?.contains(event.target as unknown as Node)) {
      setIsOpened(false);
      event.preventDefault();
      event.stopPropagation();
    }
  }

  useEffect(() => {
    document.addEventListener('click', clickOutsideMenu)
  })

  const navStyles = isOpened ? { left: '0' } : { left: '1000px' };


  return (
    <nav style={navStyles} className={styles.navigation_wrapper}>
      <Swiper 
        modules={[Controller]} 
        controller={{ control: controlledSwiper }}
        >
      <ul className={styles.navigation} ref={navRef}>
        {pathsArr.map((node, i) => (
          <li key={node}>
            <Link href={node} onClick={() => onNavigationLinkClick(i)}>
            {pathNamesArr[i]}
            </Link>
          </li>
        ))}
      </ul>
      </Swiper>
    </nav>
  )
}