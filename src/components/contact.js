import styles from './contact.module.scss';

const Contact = () => {

  return (
    <div className={styles.Contact}>
      <h4>
        Contacts
      </h4>
      <div className={`row`}>
        <div className={`col-6 col-md-4 offset-md-2`}>
          <div className={`card ${styles.Card}`}>
            <div className={`card-body`}>
              <i className={`fas  fa-4x fa-user`}/>
            </div>
            <div className={`card-footer`}>
              <p className={`${styles.Name}`}>
                Steven Hull
              </p>
              <p className={styles.Role}>
                Director
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-md-4`}>
          <div className={`card ${styles.Card}`}>
            <div className={`card-body`}>
              <i className={`fas fa-4x fa-user`}/>
            </div>
            <div className={`card-footer`}>
              <p className={`${styles.Name}`}>
                Scott Stebleton
              </p>
              <p className={styles.Role}>
                Technologist
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;
