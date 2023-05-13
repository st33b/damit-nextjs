import styles from './tournament_rules.module.scss';

const TournamentRules = () => {
  return (
    <section className={styles.TournamentRules}>
      <h3 className={`section-heading`}>
        The rules, DAMIT!
      </h3>
      <h4>
        Pending finalization.
      </h4>
      <div className={`pt-3 ${styles.Placeholder}`} aria-hidden={true}>
        <div className={'h5'}>
          <span className={'col-3 placeholder placeholder-lg d-block'}></span>
        </div>
        {[0,1,2,3,4].map(num => (
          <p key={num}>
            <span className={'placeholder col-1'}></span>
            <span className={'placeholder col-5'}></span>
            <span className={'placeholder col-6'}></span>
            <span className={'placeholder col-1'}></span>
            <span className={'placeholder col-11'}></span>
            <span className={'placeholder col-1'}></span>
            <span className={'placeholder col-3'}></span>
            <span className={'placeholder col-1'}></span>
            <span className={'placeholder col-4'}></span>
            <span className={'placeholder col-10'}></span>
            <span className={'placeholder col-8'}></span>
          </p>
        ))}

      </div>
      {/*<ul>*/}
      {/*  <li>*/}
      {/*    Do not talk about DAMIT.*/}
      {/*  </li>*/}
      {/*</ul>*/}
    </section>
  );
}

export default TournamentRules;
