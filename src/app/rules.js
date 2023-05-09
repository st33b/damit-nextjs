import styles from './rules.module.scss';
import Header from "@/components/header";
import Sponsors from "@/components/sponsors";
import Footer from "@/components/footer";
import TournamentRules from "@/components/tournament_rules";

const Rules = () => {
  return (
    <main className={styles.Rules}>
      <Header/>
      <TournamentRules/>
      <Sponsors/>
      <Footer/>
    </main>
  );
}

export default Rules;
