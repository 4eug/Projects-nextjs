import React from "react";
import Shape from "../utilities/shape/shape";

function HeroSection() {
  return (
    <>
      <section className="pt-28 bg-gradient-to-r from-rose-900 via-gray-800 to-rose-900;">
        <div className="text-center">
          <h1 className="text-6xl text-white mt-1  font-bold">
            Impactful Digital Experiences
          </h1>

          <div className="space-y-3">
            <p className="text-xl text-white mt-1 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquat enim
              ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          {/*  Pull Down Arrow */}
          <div>Arrow Button</div>
        </div>

        {/* Shape */}

        <div>{/* <Shape/> */}</div>
      </section>
    </>
  );
}

export default HeroSection;
