import Head from "next/head";
import Nav from "../components/Nav";
import HeroSection from "../components/Hero Section/Hero";
import AboutSection from "../components/About Us Section/About";


export default function Home() {
  return (
    <>
      <Head>
        <title>IJIKOD Website</title>
        <meta name="description" content="Developed by IJIKOD" />
        <link rel="icon" href="/." />
      </Head>


	  <Nav/>

		<HeroSection />
    <AboutSection />
    </>
  );
}
