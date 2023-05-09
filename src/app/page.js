import Header from "@/components/header";
import Hero from "@/components/hero";
import Title from "@/components/title";
import Location from "@/components/location";
import Schedule from "@/components/schedule";
import RegisterCTA from "@/components/register_cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Sponsors from "@/components/sponsors";

import styles from './page.module.scss';

const MainPage = () => {
  return (
    <main className={styles.Page}>
      <Header/>
      <Hero/>
      <Title/>
      <Location/>
      <Schedule/>
      <RegisterCTA/>
      <Contact/>
      <Sponsors/>
      <Footer/>
    </main>
  )
}

export default MainPage;
