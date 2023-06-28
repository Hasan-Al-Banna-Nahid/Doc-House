import ServiceAndTime from "@/Components/(Home)/ServiceTimeAndLocation/ServiceTimeAndLocation";
import Footer from "@/Components/(Home)/Footer/Footer";
import Header from "@/Components/(Home)/Header/Header";
import HeroSection from "@/Components/(Home)/HeroSection/HeroSection";
import Service from "@/Components/(Home)/Service/Service";
import Testimonial from "@/Components/(Home)/Testimonial/Testimonial";
import { Suspense } from "react";
import Contact from "@/Components/(Home)/Contact/Contact";
import Doctors from "@/Components/(Home)/Doctors/Doctors";
export const metadata = {
  title: "Home | Doc House",
  description: "Generated by Next JS",
};

const Home = () => {
  return (
    <main>
      <Header />
      <HeroSection />
      <Service />
      <ServiceAndTime />
      <Suspense
        fallback={
          <h2 className="text-red-800 text-3xl text-center font-bold bg-base-300">
            Loading...
          </h2>
        }
      >
        <Testimonial />
      </Suspense>
      <Doctors />
      <Contact />

      <Footer />
    </main>
  );
};
export default Home;
