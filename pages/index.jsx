import Head from "next/head";
import Nav from "../components/Nav";
import HeroSection from "../components/Hero Section/Hero";
import AboutSection from "../components/About Us Section/About";
import SideBar from "../components/utilities/sidebar";
import { useState } from "react";
import Services from "../components/Services Section/Services";
import PortfolioSection from "../components/Portfolio Section/Portfolio";

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

      <SideBar sideBar={sideBar} />
    </>
  );
}
