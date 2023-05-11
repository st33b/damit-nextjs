import RootLayout from "@/components/layouts/layout";
import Dallas from "@/components/dallas";
import Sponsors from "@/components/sponsors";

const AboutDallas = () => {
  return (
    <div>
      <Dallas full={true}/>
      <Sponsors/>
    </div>
  );
}

AboutDallas.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default AboutDallas;
