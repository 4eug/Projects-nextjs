import Head from "next/head";
import Nav from "../components/Nav";
import HeroSection from "../components/Hero Section/Hero";
import AboutSection from "../components/About Us Section/About";
import SideBar from "../components/utilities/sidebar";
import { useState } from "react";
import Services from "../components/Services Section/Services";

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
        <Nav sideBar={sideBar} setSideBar={setSideBar}/>
        <HeroSection />
      </section>
      <section className="main bg-ijikod-wine py-20 text-white">
        <AboutSection />
        {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum, nisi. */}
      </section>
      <Services />
      <SideBar sideBar={sideBar} />
    </>
  );
}
