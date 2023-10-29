import { createContext } from 'react';
import { Swiper } from 'swiper/types';

type Context = {
  isModalOpen: boolean,
  setIsModalOpen: (isModalOpen: boolean) => void,
  modalMessage: {
    title: string, 
    message: string,
  },
  setModalMessage: ({ title, message }: { title: string, message: string}) => void,
  controlledSwiper: Swiper | null,
  setControlledSwiper: (controlledFirstSwiper: Swiper | null) => void,
};

export const Context = createContext<Context>({
    isModalOpen: false,
    setIsModalOpen: () => {},
    modalMessage: {
      title: '', 
      message: '',
    },
    setModalMessage: () => {},
    controlledSwiper: null,
    setControlledSwiper: () => {},
});