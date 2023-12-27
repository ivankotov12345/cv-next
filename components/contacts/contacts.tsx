import styles from './contacts.module.scss';

export default function Contacts() {
  return (
    <table className={styles.table_contacts}>
      <tbody className={styles.table_body}>
      <tr className={styles.table_row_headers}>
          <th>Telegram:</th>
          <th>Phone:</th>
          <th>Skype:</th>
          <th>LinkedIn:</th>
          <th>Gmail:</th>
      </tr>
      <tr className={styles.table_row_info}>
          <td><a href='https://t.me/muddy_buddy' target='_blank'>Jean Cat</a></td>
          <td><a href='tel:+375295635835'>+375295635835</a></td>
          <td><a href='skype:375295635835' target='_blank'>Ivan Kotov</a></td>
          <td><a href='https://www.linkedin.com/in/ivan-kotov-7b1012238/' target='_blank'>Ivan Kotov</a></td>
          <td><a href='mailto:ivankotov12345@gmail.com'>ivankotov12345@gmail.com</a></td>
      </tr>
      </tbody>
    </table>
  )
}
