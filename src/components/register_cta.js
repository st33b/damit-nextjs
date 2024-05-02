import styles from './register_cta.module.scss';
import Link from "next/link";

const RegisterCTA = ({flavor=`regular`}) => {
  let linkStyle = styles.RegularLink;
  if (flavor === 'raffle') {
    linkStyle = styles.RaffleLink;
  }

  return (
    <div className={styles.RegisterCTA}>
      {/*<Link href={`https://www.tourn.io/tournaments/damit-2023`}*/}
      {/*      className={`btn btn-lg ${linkStyle}`}*/}
      {/*      >*/}
        Register
      {/*</Link>*/}
    </div>
  )
}

export default RegisterCTA;
