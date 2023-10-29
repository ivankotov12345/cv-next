import { useContext } from 'react';
import { CloseButton } from '@mantine/core';

import { Context } from '@/context/context';

import styles from './modal-window.module.scss';

export default function ModalWindow() {
  const { setIsModalOpen, modalMessage } = useContext(Context);

  const handleOnUp = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.modal_wrapper}>
      <div className={styles.modal_container}>
        <div className={styles.close_button_wrapper}>
          <CloseButton variant='transparent' onPointerUp={handleOnUp} />
        </div>

        <h3 className={styles.modal_title}>{modalMessage.title}</h3>
        <p className={styles.modal_text}>{modalMessage.message}</p>
        <button onPointerUp={handleOnUp} className={styles.modal_button}>Back</button>
      </div>
    </div>
  )
}
