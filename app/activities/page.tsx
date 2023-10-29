import styles from './activities.module.scss';

export default function Page() {
  return (
    <section className={styles.activities_wrapper}>
      <h2 className={styles.title_activities}>Activities</h2>

      <ul className={styles.activities_list}>
        <li>I have nice library which includes books of Hemingway, Camus, Kafka, Tolstoy and other author&apos;s books. I like to spend weekends reading.</li>

        <li>I have basic guitar skills so sometimes I also play and sing.</li>

        <li>Great film photographer. Have 70 years old camera wich i almost never leave at home.</li>
              
        <li>Volunteering is an important part of my life. I was a volunteer in second large organization called &quot;Caritas&quot; and even gave lectures people who want to make the world a better place.</li>
      </ul>
    </section>
  )
}
