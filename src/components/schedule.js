import styles from './schedule.module.scss';

const Schedule = () => {

  return (
    <section className={styles.Schedule} id={'schedule'}>
      <h3 className={`section-heading`}>
        Schedule of Events
      </h3>

      <div className={`row ${styles.Event}`}>
        <div className={`col-sm-4 ${styles.Date}`}>
          <h4>
            Saturday, October 7
          </h4>
        </div>
        <div className={`col-sm-5 ${styles.Detail}`}>
          <h5>
            Singles
          </h5>
          <p>
            Check-in begins 60 minutes prior to start time.
          </p>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            12pm - 4pm
          </h5>
        </div>
      </div>

      <hr className={`d-none d-md-block`}/>

      <div className={`row ${styles.Event}`}>
        <div className={`col-sm-4 ${styles.Date}`}>
          <h4>
            Sunday, October 8
          </h4>
        </div>
        <div className={`col-sm-5 ${styles.Detail}`}>
          <h5>
            Baker Doubles
          </h5>
          <p>
            Check-in begins 30 minutes prior to start time.
          </p>
        </div>
        <div className={`col-sm-3 ${styles.Time}`}>
          <h5>
            10am - 4pm
          </h5>
        </div>
      </div>

      {/*<hr className={`col offset-md-4`}/>*/}

      {/*<div className={`row ${styles.Event}`}>*/}
      {/*  <div className={`offset-sm-4 col-sm-5 ${styles.Detail}`}>*/}
      {/*    <h5>*/}
      {/*      Awards Ceremony*/}
      {/*    </h5>*/}
      {/*    <p>*/}
      {/*      We&apos;ll gather in the meeting room at Plano Super Bowl.*/}
      {/*    </p>*/}
      {/*  </div>*/}
      {/*  <div className={`col-sm-3 ${styles.Time}`}>*/}
      {/*    <h5>*/}
      {/*      4:30-5pm*/}
      {/*    </h5>*/}
      {/*  </div>*/}
      {/*</div>*/}

    </section>
  )
}

export default Schedule;
