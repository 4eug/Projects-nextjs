import React from "react";
import AboutCard from "../utilities/cards/aboutCard";
import Image from "next/image";

function WhatWeDoSection(){
    return (
        <div className="mt-20">
            <h2 className="text-center text-rose-900">What We Do</h2>        
        <div className="flex gap-16 mt-16">
        <div className=" flex flex-col items-center text-center">
          </div>
        <div className="flex gap-20 mt-16 items-end">
         <div className="w-1/2">
         <h4 className="text-rose-900 text-left text-ijikod-md">
                        Web & Desktop Applications</h4>
                    <p className="text-left mt-7 text-ijikod-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                    </p>

         </div>
            <div className="ml-32">
                <div className="h-20 w-20 relative">
                    <Image
                    layout="fill"
                    objectFit="cover"
                    priority
                    src={"/webImage.svg"}
                    alt="rocket icon"
                    />
                </div>

        </div>
        </div>
      </div>
        
        
        <div className="flex gap-16 mt-16">
        <div className="ml-32">
                <div className="h-20 w-20 relative">
                    <Image
                    layout="fill"
                    objectFit="cover"
                    priority
                    src={"/webImage.svg"}
                    alt="rocket icon"
                    />
                </div>

        </div>

          <AboutCard
            title="Excellence"
            content={
              "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." 
            }
            src="/core-value-icon-2.svg"
          />

        </div>
        </div>

        
    
        
        
    );
}
export default WhatWeDoSection;