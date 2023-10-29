'use client'
import MessageForm from '@/components/form/message-form';
import Contacts from '@/components/contacts/contacts';

import styles from './contacts.module.scss';

export default function Page() {
  return (
    <section className={styles.contacts_wrapper}>
      <h2 className={styles.title_contacts}>Contacts</h2>
      <Contacts />
      <MessageForm />
    </section>
  )
}
