import styles from './about.module.scss';

export default function About() {
  return (
    <section className={styles.about_wrapper}>
      <div>
        <h2 className={styles.title_about}>About</h2>
        <p className={styles.text}>Started my career as engineer in 2019, and worked for some local factories until now. Proved myself as capable, flexible team worker with an great sence of humor have abilities to learning.</p>
      </div>

      <div className={styles.table}>
        <div className={styles.column}>
          <h3>Location</h3>
          <p>Belarus, Mogilev, Minsk</p>
        </div>

        <div className={styles.column}>
          <h3>Education</h3>
          <p>Belarussian-Russian University</p>
        </div>

        <div className={styles.column}>
          <h3>Work experience</h3>
          <p>2019-2022: Design engineer</p>
        </div>

        <div className={styles.column}>
          <h3>Languages</h3>
          <ul>
            <li>Russian: native</li>
            <li>English: B1</li>
            <li>Polish: A2</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
