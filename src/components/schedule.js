import styles from './schedule.module.scss';

const Schedule = () => {

  return (
    <div className={styles.Schedule}>
      <h3>
        Schedule of Events
      </h3>
      <p >
        All events held at Plano Super Bowl.
      </p>

      <div className={`row ${styles.Event}`}>
        <div className={`col-sm-4 ${styles.Date}`}>
          <h4>
            Saturday, October 7
          </h4>
        </div>
        <div className={`col-sm-5 ${styles.Detail}`}>
          <h5 className={`${styles.Title}`}>
            Singles
          </h5>
          <p>
            Check-in begins 30 minutes prior to start time.
          </p>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            12pm-4pm
          </h5>
        </div>
      </div>

      <div className={`row ${styles.Event}`}>
        <div className={`col-sm-4 ${styles.Date}`}>
          <h4>
            Sunday, October 8
          </h4>
        </div>
        <div className={`col-sm-5 ${styles.Detail}`}>
          <h5 className={`${styles.Title}`}>
            Baker Doubles
          </h5>
          <p>
            Check-in begins 30 minutes prior to start time.
          </p>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            11am-4pm
          </h5>
        </div>
      </div>

      <div className={`row ${styles.Event}`}>
        <div className={`offset-sm-4 col-sm-5 ${styles.Detail}`}>
          <h5 className={`${styles.Title}`}>
            Awards Ceremony
          </h5>
          <p>
            We&apos;ll gather in the meeting room at Plano Super Bowl.
          </p>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            4:30-5pm
          </h5>
        </div>
      </div>

    </div>
  )
}

export default Schedule;
