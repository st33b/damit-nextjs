import styles from './contact.module.scss';

import steven from '@/images/steven.jpg';
import scott from '@/images/scott.jpg';
import Image from "next/image";

const Contact = () => {

  return (
    <section className={styles.Contact} id={'contact'}>
      <h3 className={`section-heading`}>
        Contacts
      </h3>
      <div className={`row justify-content-center`}>
        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${styles.Card}`}>
            <Image src={steven}
                   alt={'Picture of Steven'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            {/*<div className={`card-body ${styles.Face}`}>*/}
            {/*  <i className={`bi-person-workspace ${styles.Placeholder}`}/>*/}
            {/*</div>*/}
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                <a href={'mailto:damitdirectors@gmail.com?subject=About%20DAMIT'}>
                  Steven Hull
                </a>
              </p>
              <p className={styles.Role}>
                Director
              </p>
            </div>
          </div>
        </div>

        <div className={`col-6 col-sm-4 col-md-3 col-xl-2`}>
          <div className={`card ${styles.Card}`}>
            <Image src={scott}
                   alt={'Picture of Scott'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
            <div className={`card-body`}>
              <p className={`${styles.Name}`}>
                <a href={'mailto:scott@stebleton.net?subject=Regarding%20DAMIT'}>
                  Scott Stebleton
                </a>
              </p>
              <p className={styles.Role}>
                Technologist
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact;
