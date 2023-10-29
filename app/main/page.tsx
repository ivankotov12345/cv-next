import Image from 'next/image';

import photoCV from './assets/img/photoCV.webp';

import styles from './main.module.scss';

export default function MainPage() {
  return (
    <section className={styles.main_page_wrapper}>
      <div className={styles.image_wrapper}>
        <Image 
          src={photoCV} 
          alt='photo' 
          className={styles.image} 
          priority={true} 
          draggable={false} 
          />
      </div>

      <div className={styles.headers_wrapper}>
        <h1 className={styles.title}>Ivan Kotov</h1>
        <p className={styles.text}>Junior front-end developer</p>
      </div>
    </section>
  )
}
