import styles from './sponsors.module.scss';

const Sponsors = () => {

  return (
    <div className={styles.Sponsors}>
      <div className={`d-flex justify-content-around`}>
        <div className={`${styles.Sponsor}`}>
          <i className={`fas fa-magnifying-glass-dollar fa-3x`} />
        </div>
        <div className={`${styles.Sponsor}`}>
          <i className={`fas fa-comment-dollar fa-3x`} />
        </div>
        <div className={`${styles.Sponsor}`}>
          <i className={`fas fa-magnifying-glass-dollar fa-3x`} />
        </div>
      </div>
    </div>
  )
}

export default Sponsors;
