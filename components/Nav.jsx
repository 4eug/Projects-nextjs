import React from "react";
import Image from "next/image";

function Nav(props) {
  return (
    <nav className="h-ijikod-px-60 bg-white-200 flex justify-between items-center px-60">
      <div className="h-8 w-20 relative">      
       <Image 
       layout="fill"
       objectFit="contain"
       priority
       src={"/Logo.png"}
       alt="ijikod logo"
       />
      
      </div>
      <div className="text-black-500 group  inline-flex  items-center md:gap-7 text-base font-medium">
          <div className="hover:text-gray-400">About us</div>
          <ol>Services</ol>
          <ol>Portfolio</ol>
          <ol>Join Us</ol>
      </div>

    <button className="bg-red-500 hover:bg-red-700 text-white text-center py-2 px-4 rounded-full">
        Contact Us
        </button>
    </nav>
  );
}

export default Nav;
