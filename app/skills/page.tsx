
import styles from './skills.module.scss';

export default function page() {
  return (
    <section className={styles.skills_wrapper}>
      <h2 className={styles.title_skills}>Skills</h2>
      <ul className={styles.skills_list}>
        <li>HTML</li>
        <li>CSS</li>
        <li>SCSS</li>
        <li>JavaScript</li>
        <li>OOP</li>
        <li>Basic algorithms</li>
        <li>TypeScript</li>
        <li>Git</li>
        <li>Webpack</li>
        <li>React</li>
        <li>Redux-toolkit</li>
        <li>Next.js</li>
      </ul>
    </section>
  )
}
