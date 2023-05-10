import RootLayout from "@/components/layouts/layout";
import Dallas from "@/components/dallas";

const AboutDallas = () => {
  return (
    <div>
      <Dallas full={true}/>
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
