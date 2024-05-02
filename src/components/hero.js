import styles from './hero.module.scss';
import RegisterCTA from "@/components/register_cta";

const Hero = () => {

  return (
    <section className={`${styles.Hero} d-flex justify-content-center align-items-center`} id={'top'}>
      <div className={`${styles.Content}`}>
        <h1 className={'display-3'}>
          The Dallas Area Masters Invitational Tournament
        </h1>

        <h2>
          An{' '}
          <span className={'fw-bold'}>IGBO</span>
          {' '}bowling tournament
        </h2>

        {/*<h3>*/}
        {/*  October 7-8, 2023*/}
        {/*</h3>*/}

        <h3>
          A unique tournament with Singles and Baker Doubles events. Bowlers may enter either or both events.
        </h3>

        <p className={styles.Spotlight}>
          Unfortunately, the 2023 instance of DAMIT was the tournament&apos;s last until further notice. Thank you to all the bowlers and volunteers who helped make the tournament a reality!
        </p>

        {/*<RegisterCTA/>*/}
      </div>

      <div className={styles.BackgroundBasis}/>
      <div className={styles.BackgroundImage}/>
    </section>
  )
}

export default Hero;
