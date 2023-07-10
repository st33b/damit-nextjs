import Link from "next/link";
import Image from "next/image";

import prizeImage from '../images/raffle/raffle-prize-fullsize.jpg';
import styles from './raffle.module.scss';
import RegisterCTA from "@/components/register_cta";

const Raffle = () => {

  return (
    <section className={styles.Raffle} id={'raffle'}>
      <h3 className={'section-heading'}>
        #SpareTheGirls
      </h3>

      <p>
        DAMIT is proud to support the{' '}
        <Link href={'https://strikingagainstbreastcancer.org/'}
              className={`${styles.CharityLink}`}
              target={'_blank'}
        >
           X Out Breast Cancer Foundation
        </Link>
        {' '}through its fundraising efforts.
      </p>

      <p>
        We are raffling off a 14- or 15-pound Storm{' '}
        <strong>
          #SpareTheGirls
        </strong>
        {' '}bowling ball. (The winner will choose which ball weight they want.)
        {/*{' '}*/}
        {/*<Link href={'https://strikingagainstbreastcancer.org/spare-the-girls-bowling-ball/'}*/}
        {/*      className={`icon-link icon-link-hover`}*/}
        {/*      target={'_blank'}>*/}
        {/*  Learn more about the ball.*/}
        {/*  <i className={`bi bi-arrow-up-right-square external-link-indicator`} aria-hidden={true}/>*/}
        {/*</Link>*/}
      </p>

      <div className={`row d-flex justify-content-center mb-3`}>
        <div className={`col-8`}>
          <Image src={prizeImage}
                 alt={'The raffle prize is a bowling ball with the charity logo'}
                 fill={``}
                 className={`img-fluid`}
                 sizes={'(max-width: 767px) 67vw'}
          />
        </div>
      </div>

      {/*<h4>*/}
      {/*  Buy your raffle tickets early*/}
      {/*</h4>*/}

      <p>
        Tickets will be available at the tournament in bundles of 1, 6, and 30, but we&apos;re offering an advance,{' '}
        <em>
          online-only
        </em>
        {' '}bundle of 50 tickets. Buy your tickets when you register!
      </p>

      <p>
        <span className={styles.Percentage}>
          100% of raffle proceeds
        </span>
        {' '}go to the charity. In 2022, we raised $1500; will you help us surpass that this year?
      </p>

      <RegisterCTA flavor={'raffle'}/>
    </section>
  );
}

export default Raffle;
