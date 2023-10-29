'use client'
import { useContext } from 'react';
import { Context } from '@/context/context';

import styles from './footer.module.scss';

export default function Footer() {
  const { controlledSwiper } = useContext(Context);

  const onBtnForward = () => {
    if(controlledSwiper) {
      controlledSwiper.slideNext();
    };
  };

  const onBtnBack = () => {
    if(controlledSwiper) {
      controlledSwiper.slidePrev();
    };
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_outer}>
        <div className={styles.footer_inner}>
          <div>
            <p className={styles.footer_text}>© by Ivan Kotov</p>
          </div>

          <div>
            <button type='button' onClick={onBtnBack} className={styles.button_left}>
              <span>❮</span>
              <span>❮</span>
              <span>❮</span>
            </button>
            <button type='button' onClick={onBtnForward} className={styles.button_right}>
              <span>❯</span>
              <span>❯</span>
              <span>❯</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
