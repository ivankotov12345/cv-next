'use client'
import { useForm } from '@mantine/form';
import { useRef, useContext } from 'react';
import { TextInput, Textarea } from '@mantine/core';
import emailjs from '@emailjs/browser';

import './input.scss'
import styles from './message-form.module.scss'
import { Context } from '@/context/context';
import { useScreenWidth } from '@/hooks/use-screen-width';

export default function MessageForm() {
  const { setIsModalOpen, setModalMessage } = useContext(Context);
  const formRef = useRef<HTMLFormElement | null>(null);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      message: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(value) ? null : 'Invalid email'),
      message: (value) => (value.length <= 0 ? 'Message field is empty' : null)
    },
  });

  const screenWidth = useScreenWidth();

  const rows = screenWidth && screenWidth > 700 ? 3 : 2;

  const sendEmail = () => {
    form.validate();
    if(formRef.current && form.isValid()){
      emailjs.sendForm('service_9ib62cu', 'template_2tggrki', formRef.current, 'ZV-Pt1rlV7ZqkpSD7')
      .then(() => {
          setIsModalOpen(true);
          setModalMessage({
            title: 'Thank you!',
            message: 'Your message was successfully sent',
          });
      }, () => {
        setIsModalOpen(true);
        setModalMessage({
          title: 'Oops!',
          message: 'Something goes wrong. Please, try again later',
        })
      });
      formRef.current.reset();
    };
  };
  return (
    <form ref={formRef} className={styles.message_form}>
    <TextInput
      label='Name'
      name='user_name'
      placeholder='Enter your name'
      {...form.getInputProps('name')} 
      />

    <TextInput
      label='Email'
      name='user_email'
      placeholder='Enter your email'
      {...form.getInputProps('email')} 
      />

    <Textarea
      label='Message' 
      name='message'
      placeholder='Enter your message'
      autosize
      minRows={rows}
      maxRows={rows}
      {...form.getInputProps('message')} 
      />
    
    <div className={styles.message_button_wrapper}>
      <button type='button' onClick={sendEmail} className={styles.message_form_button}>Send</button>
    </div>
  </form>
  )
}
