import { Loader } from '@mantine/core';

import styles from './loader-container.module.scss';

export default function LoaderContainer() {
  const loaderColor = '#4CF5F2';

  return (
    <div className={styles.loader_wrapper}>
      <Loader color={loaderColor} size={50} />  
    </div>
  )
}
