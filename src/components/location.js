import styles from './location.module.scss';

const Location = () => {

  return (
    <div className={styles.Location}>
      <h5>
        Plano Super Bowl
      </h5>
      <address>
        <span className={`d-block`}>
          2521 K Avenue
        </span>
        <span className={`d-block`}>
          Plano, TX 75074
        </span>
        <span className={`d-block`}>
          <i className={`fas fa-phone me-2`} aria-hidden={true}/>
          <a href={`tel:9728810242`}>
            972-881-0242
          </a>
        </span>
      </address>
      <div className={`ratio ratio-21x9 ${styles.Map}`}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3344.8575860664496!2d-96.7028980230759!3d33.03388227355715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19075ddf849b%3A0x607103a9ca4d7441!2sPlano%20Super%20Bowl!5e0!3m2!1sen!2sus!4v1683740363148!5m2!1sen!2sus"
          allowFullScreen="" loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  )
}

export default Location;
