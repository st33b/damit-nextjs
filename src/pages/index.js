import Hero from "@/components/hero";
import Title from "@/components/title";
import Location from "@/components/location";
import Schedule from "@/components/schedule";
import RegisterCTA from "@/components/register_cta";
import Contact from "@/components/contact";
import Dallas from "@/components/dallas";
import Sponsors from "@/components/sponsors";
import RootLayout from "@/components/layouts/layout";

const MainPage = () => {
  return (
    <div>
      <Title/>
      <Hero/>
      <Location/>
      <Schedule/>
      <Dallas full={false}/>
      {/*<RegisterCTA/>*/}
      <Contact/>
      <Sponsors/>
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
