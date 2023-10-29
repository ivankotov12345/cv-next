'use client'
import { Context } from '@/context/context';
import { useState } from 'react';
import { Swiper } from 'swiper/types';

export default function ContextWrapper({ children }: { children: React.ReactNode }) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<{ title: string, message: string}>({
    title: '',
    message: '',
  });
  const [controlledSwiper, setControlledSwiper] = useState<Swiper | null>(null);

  return (
    <Context.Provider value={{ 
      isModalOpen, 
      setIsModalOpen, 
      modalMessage, 
      setModalMessage,
      controlledSwiper,
      setControlledSwiper,
       }}
       >
      { children }
    </Context.Provider>
  )
}
