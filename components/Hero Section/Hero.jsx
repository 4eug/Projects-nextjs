import Image from "next/image";
import React from "react";
import Shape from "../utilities/shape/shape";

function HeroSection() {
  return (
    <>
      <section className="bg-ijikod-hero-gradient h-screen relative">
        <div className="relative h-60">
          <Image
            layout="fill"
            objectFit="contain"
            priority
            src={"/shape.png"}
            alt="ijikod logo"
          />
        </div>
      </section>
    </>
  );
}

export default HeroSection;
