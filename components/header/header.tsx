'use client'
import Link from 'next/link';
import { useState, useRef } from 'react';
import { Burger } from '@mantine/core';

import Navigation from '../navigation/navigation';
import { useScreenWidth } from '@/hooks/use-screen-width';

import { Paths } from '@/enums/paths';

import styles from './header.module.scss';

export default function Header() {
  const screenWidth = useScreenWidth();
  const [isOpened, setIsOpened] = useState<boolean>(false);

  const burgerBtnRef = useRef<HTMLButtonElement>(null);

  const toggleBurgerMenu = () => {
    setIsOpened(!isOpened);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header_outer}>
        <div className={styles.header_inner}>
          <Link href={Paths.main} className={styles.logo}>CV</Link>
          {screenWidth 
            && screenWidth <= 850 
            && <Burger 
                  opened={isOpened} 
                  onClick={toggleBurgerMenu}
                  color='#4CF5F2'
                  ref={burgerBtnRef} />}
          <Navigation isOpened={isOpened} setIsOpened={setIsOpened} burgerBtnRef={burgerBtnRef} />
        </div>
      </div>
    </header>
  )
}
