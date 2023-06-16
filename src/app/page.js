import Contact from "@/Components/(Layout)/Contact/Contact";
import HeroSection from "@/Components/(Layout)/HeroSection/HeroSection";
import Service from "@/Components/(Layout)/Service/Service";
import Testimonial from "@/Components/(Layout)/Testimonial/Testimonial";

const Home = () => {
  return (
    <main>
      <HeroSection />
      <Service />
      <Contact />
      <Testimonial />
    </main>
  );
};
export default Home;
