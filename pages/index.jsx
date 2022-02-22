import Head from "next/head";
import Nav from "../components/Nav";
import HeroSection from "../components/Hero Section/Hero";
import AboutSection from "../components/About Us Section/About";
import WhatWeDoSection from "../components/WWD Section/whatWeDo"

export default function Home() {
  return (
    <>
      <Head>
        <title>IJIKOD Website</title>
        <meta name="description" content="Developed by IJIKOD" />
        <link rel="icon" href="/." />
      </Head>

      <section className="h-screen">
        <Nav />
        <HeroSection />
      </section>
      <section className="main bg-ijikod-wine py-20 text-white">
        <AboutSection />
      </section>
      <section className="main h-screen">
        <WhatWeDoSection />
        </section>
    </>
  );
}
