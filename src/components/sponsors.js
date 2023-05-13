import Image from "next/image";
import igbo from '@/images/sponsors/igbo600w.png';
import storm from '@/images/sponsors/storm-black.png';

import styles from './sponsors.module.scss';

const Sponsors = () => {

  return (
    <section className={styles.Sponsors}>
      <h3 className={`section-heading`}>
        Our Sponsors
      </h3>

      <div className={`d-flex flex-wrap align-items-center justify-content-evenly`}>
        <div className={`${styles.Sponsor} order-1 order-md-0`}>
          <a href={'https://www.stormbowling.com/'}
             target={'_blank'}>
            <Image src={storm}
                   alt={'Storm Bowling logo'}
                   className={styles.Logo}
            />
          </a>
        </div>
        <div className={`${styles.Sponsor} order-0 order-md-1`}>
          <a href={'http://www.igbo.org'}
             target={'_blank'}>
            <Image src={igbo}
                   alt={'IGBO logo'}
                   className={styles.Logo}
                   />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Sponsors;
