import styles from './shirts.module.scss';

import shirts from '@/images/shirts/shirts.jpg';
import mens from '@/images/shirts/mens.jpg';
import womens from '@/images/shirts/womens.jpg';
import Image from "next/image";
import Link from "next/link";

const Shirts = () => {

  return (
    <section className={styles.Shirts} id={'shirts'}>
      <h3 className={`section-heading`}>
        T-shirts
      </h3>
      <div className={`row`}>
        <p className={`lead`}>
          We&apos;re selling t-shirts!
        </p>
        <p>
          For a limited time, you can buy T-shirts along with your entry fee! Shirts are available in both men&apos;s and women&apos;s fits, in sizes ranging from XS to 3XL.
        </p>
        <p>
          Check &apos;em out below, and buy one after&nbsp;
          <Link href={`https://www.tourn.io/tournaments/damit-2023`}
                className={``}
          >
            registering
          </Link>
          .
        </p>
      </div>
      <div className={`row justify-content-center`}>
        <div className={`col-12 col-sm-6 col-lg-4`}>
          <div className={`card ${styles.Card}`}>
            <Image src={shirts}
                   alt={'Both shirts'}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
          </div>
        </div>

        <div className={`col-12 col-sm-6 col-lg-4`}>
          <div className={`card ${styles.Card}`}>
            <Image src={womens}
                   alt={`'Women's shirt'`}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
          </div>
        </div>

        <div className={`col-12 col-sm-6 col-lg-4`}>
          <div className={`card ${styles.Card}`}>
            <Image src={mens}
                   alt={`Men's shirts`}
                   className={`img-fluid card-img-top ${styles.Image}`}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Shirts;
