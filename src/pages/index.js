import Hero from "@/components/hero";
import Location from "@/components/location";
import Schedule from "@/components/schedule";
import Contact from "@/components/contact";
import Dallas from "@/components/dallas";
import RootLayout from "@/components/layouts/layout";
import Local from "@/components/local";
import Raffle from "@/components/raffle";
import Shirts from "@/components/shirts";

const MainPage = () => {
  return (
    <div>
      <Hero/>
      <Location/>
      <Schedule/>
      <Raffle/>
      <Shirts/>
      <Dallas full={false}/>
      <Local/>
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
