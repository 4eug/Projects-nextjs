import React from "react";
import AboutCard from "../utilities/cards/aboutCard";
import Image from "next/image";

function AboutSection() {
  return (
    <div>
      <h2>About Us</h2>

      <div className="flex gap-10 items-end mt-10">
        <div className="w-1/3">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
        dolor in reprehenderit in voluptate velit esse cillum dolore
        eu fugiat nulla pariatur.
        </div>

        <div className="w-1/3 flex flex-col items-center text-center">
          <div className="h-20 w-20 relative">
            <Image
              layout="fill"
              objectFit="contain"
              priority
              src={"/rocket.svg"}
              alt="rocket icon"
            />
          </div>
          <h4 className="my-5">Mission</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            illo.
          </p>
        </div>

        <div className="w-1/3 flex flex-col items-center text-center">
          <div className="h-20 w-20 relative">
            <Image
              layout="fill"
              objectFit="contain"
              priority
              src={"/target.svg"}
              alt="target icon"
            />
          </div>
          <h4 className="my-5">Vision</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,
            illo.
          </p>
        </div>
      </div>

      <div className="mt-36">
        <h3 className="text-center">Our Core Values</h3>
        <div className="flex gap-16 mt-16">
          <AboutCard
            title="Excellence"
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
            src="/core-value-icon-1.svg"
          />

          <AboutCard
            title="Excellence"
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            }
            src="/core-value-icon-2.svg"
          />

          <AboutCard
            title="Excellence"
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est labrum."
            }
            src="/core-value-icon-3.svg"
          />
        </div>

        <div className="mt-32 flex items-center justify-center">
          <button className="dark">Download Company Profile</button>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
