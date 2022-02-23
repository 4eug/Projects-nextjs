import Image from "next/image";
import React from "react";
import Shape from "../utilities/shape/shape";

function HeroSection() {
  return (
      <section className="bg-ijikod-hero-gradient h-ijikod-h-hero relative flex justify-center items-center top-ijikod-hero-offset-t">
        <div className="z-20 text-center md:w-3/4 xl:w-1/2 px-5 -mt-8">
          <h1 className="leading-tight">Impactful Digital Experiences</h1>

          <p className="text-white mt-6 font-light w-10/12 mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliquat enim ad
            minim veniam, quis nostrud exercitation.
          </p>

          <div className="flex items-center justify-center h-20 mt-5">
            <div className="bg-[url('/next-page.png')] animate-bounce w-8 h-14 bg-cover bg-center bg-no-repeat cursor-pointer" />
          </div>
        </div>

        <div className="hero-shape" />
      </section>
  );
}

export default HeroSection;
