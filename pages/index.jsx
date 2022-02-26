import Head from "next/head";
import Nav from "../components/Nav";
import HeroSection from "../components/Hero Section/Hero";
import AboutSection from "../components/About Us Section/About";
import SideBar from "../components/utilities/sidebar";
import { useState } from "react";
import Services from "../components/Services Section/Services";
import PortfolioSection from "../components/Portfolio Section/Portfolio";
import IndustriesSection from "../components/Industries Section/Indust"
import Join from "../components/Join Section/join";
import Stack from "../components/Stack Section/stack";

export default function Home() {
  const [sideBar, setSideBar] = useState(false);
  return (
    <>
      <Head>
        <title>IJIKOD Website</title>
        <meta name="description" content="Developed by IJIKOD" />
        <link rel="icon" href="/." />
      </Head>

      <section className="h-screen">
        <Nav sideBar={sideBar} setSideBar={setSideBar} />
        <HeroSection />
      </section>
      <section className="main bg-ijikod-wine py-20 text-white">
        <AboutSection />
      </section>

      <section className="px-20 lg:px-36 pb-8">
        <Services />
      </section>

      <section className="px-5 md:px-20 lg:px-36 pb-10">
        <PortfolioSection />
      </section>

      <section className="main bg-ijikod-dark py-20 text-white mt-20">
        <IndustriesSection />
      </section>

      <section className="px-20 lg:px-36 pb-8">
        <Join />
      </section>

      <section>
        <Stack />
      </section>

      <SideBar sideBar={sideBar} />
    </>
  );
}
