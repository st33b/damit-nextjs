import Sponsors from "@/components/sponsors";
import Footer from "@/components/layouts/footer";
import TournamentRules from "@/components/tournament_rules";
import RootLayout from "@/components/layouts/layout";

const Rules = () => {
  return (
    <div>
      <TournamentRules/>
      <Sponsors/>
      <Footer/>
    </div>
  );
}

Rules.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  );
}

export default Rules;
