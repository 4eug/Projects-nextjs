import React from "react";
import AboutCard from "../utilities/cards/aboutCard";
import Image from "next/image";

function Services(){
    return (
        <div className="mt-20">
            <h2 className="text-center text-rose-900">What We Do</h2>     

            {/* Web & Desktop Services */}

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
                    alt="Web-Image"
                    />
                </div>

        </div>
        </div>
      </div>

      {/* End of Web & Desktop Services */}

      
      {/* Mobile Applications Services */}
        
        <div className="mt-32">
        <div className="flex gap-32 mt-16">
        <div className="ml-32">
                <div className="h-20 w-20 relative">
                    <Image
                    layout="fill"
                    objectFit="cover"
                    priority
                    src={"/mobileImage.svg"}
                    alt="Mobile-Image"
                    />
                </div>

        </div>
        <div>
        </div>
            
            <div className="w-1/2">
                <h4 className="text-rose-900 text-left text-ijikod-md">
                Mobile Apps
                </h4>
                <p className="text-left mt-7 text-ijikod-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                    </p>

            </div>
            </div>
            </div>

        {/* End of Mobile Application Services */}

            {/* Internet of Things Services */}

                <div className="flex gap-16 mt-16">
            <div className=" flex flex-col items-center text-center">
            </div>
        <div className="flex gap-20 mt-16 items-end">
         <div className="w-1/2">
         <h4 className="text-rose-900 text-left text-ijikod-md">
                    Internet of Things (IoT)</h4>
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
                    alt="Web-Image"
                    />
                </div>

        </div>
        </div>

        </div>

            {/* End of Internet of Things Services */}


            {/* UIUX Services */}

            <div className="mt-32">
        <div className="flex gap-32 mt-16">
        <div className="ml-32">
                <div className="h-20 w-20 relative">
                    <Image
                    layout="fill"
                    objectFit="cover"
                    priority
                    src={"/UIUX.svg"}
                    alt="UIUX"
                    />
                </div>

        </div>
        <div>
        </div>
            
            <div className="w-1/2">
                <h4 className="text-rose-900 text-left text-ijikod-md">
                UI/UX
                </h4>
                <p className="text-left mt-7 text-ijikod-sm">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat nulla pariatur.
                    </p>

            </div>
            </div>
            </div>

            {/* End of UIUX Services */}

        </div>
      

        
    
        
        
    );
}
export default Services;