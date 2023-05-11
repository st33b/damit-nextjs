import styles from './hero.module.scss';

const Hero = () => {

  return (
    <section className={`${styles.Hero} d-flex justify-content-center align-items-center`} id={'top'}>
      <div className={`${styles.Content}`}>
        {/*<Image src={damitLogo}*/}
        {/*       alt={'Tournament logo'}*/}
        {/*       className={`w-100 h-auto`}*/}
        {/*/>*/}

        <h1 className={'display-3'}>
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
          <span className={'fw-bold'}>IGBO</span>
          {' '}bowling tournament
        </h2>

        <h3>
          October 7-8, 2023
        </h3>

        <p>
          A unique tournament with Singles and Baker Doubles events. Bowlers may enter either or both events.
        </p>
      </div>

      <div className={styles.BackgroundBasis}/>
      <div className={styles.BackgroundImage}/>
    </section>
  )
}

export default Hero;
