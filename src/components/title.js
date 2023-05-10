import Image from "next/image";
import damitLogo from '@/images/damit.png';

import styles from './title.module.scss';

const Title = () => {

  return (
    <div className={styles.Title}>
      <Image src={damitLogo}
             alt={'Tournament logo'}
             className={`w-100 h-auto`}
      />
      <h1 className={'display-1'}>
        The Dallas Area Masters Invitational Tournament
      </h1>
      <h3>
        An{' '}
        <a href={`http://www.igbo.org`}
           target={`_blank`}>
          IGBO
        </a>
        {' '}bowling tournament
      </h3>
      <h4>
        October 7-8, 2023
      </h4>
    </div>
  )
}

export default Title;
