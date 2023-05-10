import styles from './dallas.module.scss';

const Dallas = ({ full }) => {
  // full determines whether we show a summary or the whole shebang
  // ... the whole shebang is intended to be on its own page, while
  // the summary is intended for the Dallas section of the main page

  return (
    <div className={styles.Dallas}>
      ALL ABOUT DALLAS
    </div>
  )
}

export default Dallas;
