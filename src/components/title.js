import Image from "next/image";
import damitLogo from '@/images/damit.png';

import styles from './title.module.scss';

const Title = () => {

  return (
    <section className={styles.Title} id={'top'}>
      {/*<Image src={damitLogo}*/}
      {/*       alt={'Tournament logo'}*/}
      {/*       className={`w-100 h-auto`}*/}
      {/*/>*/}
      <h1>
        The Dallas Area Masters Invitational Tournament
      </h1>
      {/*<h1 className={'d-none d-md-block display-1'}>*/}
      {/*  The Dallas Area Masters Invitational Tournament*/}
      {/*</h1>*/}
      {/*<h1 className={'d-md-none'}>*/}
      {/*  The Dallas Area Masters Invitational Tournament*/}
      {/*</h1>*/}
      <h2>
        An{' '}
        <a href={`http://www.igbo.org`}
           target={`_blank`}>
          IGBO
        </a>
        {' '}bowling tournament
      </h2>
      <h3>
        October 7-8, 2023
      </h3>
      <div className={styles.BackgroundWrapper}/>
      <div className={styles.BackgroundImage}/>
    </section>
  )
}

export default Title;
