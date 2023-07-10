import Hero from "@/components/hero";
import Location from "@/components/location";
import Schedule from "@/components/schedule";
import RegisterCTA from "@/components/register_cta";
import Contact from "@/components/contact";
import Dallas from "@/components/dallas";
import Sponsors from "@/components/sponsors";
import RootLayout from "@/components/layouts/layout";
import Local from "@/components/local";
import Raffle from "@/components/raffle";

const MainPage = () => {
  return (
    <div>
      <Hero/>
      <Location/>
      <Schedule/>
      <Raffle/>
      <Dallas full={false}/>
      <Local/>
      {/*<RegisterCTA/>*/}
      <Contact/>
    </div>
  )
}

MainPage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default MainPage;
