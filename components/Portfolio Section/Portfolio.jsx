import React from "react";
import PortfolioCard from "../utilities/cards/portfolioCard";
import Image from "next/image";

function PortfolioSection() {
  return (
    <div className="mt-60">
      <h1 className="text-black text-left text-ijikod-md">Portfolio</h1>

      <h5 className="w-1/2 text-ijikod-gray mt-5">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud
      </h5>

      <div className="mt-20">
        <PortfolioCard
          className="bg-ijikod-blue-deep"
          content={
            "Design and development of a suite of apps for a Ghana based service management company"
          }
          src="/Ayuda.svg"
          description={"Design and development of a suite of apps for a Ghana based service management company"}
          leftSrc="/Ayuda.svg"
          techs="WEB DESIGN . MOBILE APP DESIGN . UI/UX DESIGN . WEB DEVELOPMENT . MOBILE DEVELOPMENT "
        />
      </div>


      <div className="mt-20">
        <PortfolioCard
          className="bg-ijikod-blue-dark"
          content={
            "Design and development of a suite of apps for a Ghana based service management company"
          }
          src="/Ayuda.svg"
          description={"Monitor your health and the health of your vehicle the smart way"}
          leftSrc="/Ayuda.svg"
          techs=" UI/UX DESIGN . MOBILE APP DESIGN "
        />
      </div>



      <div className="mt-20">
        <PortfolioCard
          className="bg-ijikod-blue-light"
          content={
            "Design and development of a suite of apps for a Ghana based service management company"
          }
          src="/Ayuda.svg"
          description={"Auto parts purchasing made easy. Web and mobile design and development for an auto parts client"}
          leftSrc="/Ayuda.svg"
          techs="WEB DESIGN . MOBILE APP DESIGN . UI/UX DESIGN . WEB DEVELOPMENT . MOBILE DEVELOPMENT "
        />
      </div>
    </div>
  );
}

export default PortfolioSection;
