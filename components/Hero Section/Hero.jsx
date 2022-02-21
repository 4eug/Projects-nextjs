import React from "react";
import { IoArrowDown } from "react-icons/io5";
import Shape from "../utilities/shape/shape";

function HeroSection() {
  return (
    <>
      <section className="pt-40 bg-gradient-to-t from-rose-900 to-gray-700 to-rose-900;">
        <div className="text-center">
          <h1 className="text-6xl text-white mt-1  font-bold">
            Impactful Digital 
          </h1>
          <h1 className="text-6xl text-white mt-1  font-bold">
             Experiences
          </h1>

          <div className="m-14">
            <p className="text-base text-white text-center mt-4 font-light">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliquat enim
              ad minim veniam, quis nostrud exercitation.
            </p>
          </div>

          {/*  Pull Down Arrow */}
          <div className="flex items-center justify-center h-60">
          <div className="animate-bounce w-6 h-6 items-center">
          <IoArrowDown size={40} />
            </div>
            </div>
        </div>

        {/* Shape */}

        <div>{/* <Shape/> */}</div>
      </section>
    </>
  );
}

export default HeroSection;
