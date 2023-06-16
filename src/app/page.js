import HeroSection from "@/Components/(Layout)/HeroSection/HeroSection";
import Service from "@/Components/(Layout)/Service/Service";
import Head from "next/head";

const Home = () => {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="../../public/next.svg" />
      </Head>
      <HeroSection />
      <Service />
    </main>
  );
};
export default Home;
