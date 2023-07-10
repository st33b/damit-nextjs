import Link from "next/link";
import Image from "next/image";

import prizeImage from '../images/raffle/raffle-prize-fullsize.jpg';
import styles from './raffle.module.scss';
import RegisterCTA from "@/components/register_cta";

const Raffle = () => {

  const p1 = (
    <p>
      We are raffling off a 14- or 15-pound Storm{' '}
      <strong>
        #SpareTheGirls
      </strong>
      {' '}bowling ball. (The winner will choose which ball weight they want.)
    </p>
  );
  const imageBox = (
    <div className={`mb-3`}>
      <Image src={prizeImage}
             alt={'The raffle prize is a bowling ball with the charity logo'}
             fill={``}
             className={`img-fluid`}
             sizes={'(max-width: 767px) 67vw, (max-width: 991px) 50vw, (max-width: 1199px) 34vw, (min-width: 1400px) 25vw'}
      />
    </div>
  );

  const p2 = (
    <p>
      Tickets will be available at the tournament in bundles of 1, 6, and 30, but we&apos;re offering an
      advance,{' '}
      <em>
        online-only
      </em>
      {' '}bundle of 50 tickets. Buy your tickets when you register!
    </p>
  );

  const p3 = (
    <p>
        <span className={styles.Percentage}>
          100% of raffle proceeds
        </span>
      {' '}go to the charity. In 2022, we raised $1500; will you help us surpass that this year?
    </p>
  );

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

      {/* Small devices */}
      <div className={'row d-flex d-md-none justify-content-center'}>
        <div className={'col-12'}>
          {p1}
        </div>
        <div className={'col-8'}>
          {imageBox}
        </div>
        <div className={'col-12'}>
          {p2}
        </div>
        <div className={'col-12'}>
          {p3}
        </div>
      </div>

      {/* Medium and up */}
      <div className={'row d-none d-md-flex'}>
        <div className={'col-md-5 col-lg-4 col-xl-3'}>
          {imageBox}
        </div>
        <div className={'col'}>
          {p1}
          {p2}
          {p3}
        </div>
      </div>

      <RegisterCTA flavor={'raffle'}/>
    </section>
  );
}

export default Raffle;
