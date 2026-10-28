import Hero from "../../components/Hero";
import homeHero from "../../assets/images/homeHero.png";
import Marks from "../../components/marks";
import Title from "../../components/Title";
import AboutSection from "../../components/AboutSection.jsx";
import HandSelected from "../../components/HandSelected.jsx";
import StrategicLocations from "../../components/StrategicLocations.jsx";
import FutureLandmarks from "../../components/FutureLandmarks.jsx";

export default function Home() {
  return (
    <>
      <Hero
        bg={homeHero}
        title={`Redefining the Horizon 
        of Modern Luxury Living`}
        desc={`We believe a home should be a sanctuary of innovation and an extension of your personal brand. By combining
           cutting-edge market data with a keen eye for world-class design, we help you navigate the complexities of the
           luxury market to find a space that inspires your best work and your deepest rest.`}
        btncontent={` Explore`}
        btn={true}
      />
      <Marks />
      <AboutSection />
      <HandSelected />
      <StrategicLocations />
      <FutureLandmarks />
    </>
  );
}
