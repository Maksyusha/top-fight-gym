import About from "@/app/components/about/about";
import Gym from "@/app/components/gym/gym";
import Services from "@/app/components/services/services";
import Prices from "@/app/components/prices/prices";
import Team from "@/app/components/team/team";
import Faq from "@/app/components/faq/faq";

const Home = () => {
  return (
    <>
      <About />
      <Gym />
      <Services />
      <Prices />
      <Team />
      <Faq />
    </>
  );
};

export default Home;
