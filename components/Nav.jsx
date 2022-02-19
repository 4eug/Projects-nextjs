import React from "react";
import Image from "next/image";

const NavItem = props => (
<li>
    <a href={props.href}>
        {props.text}
    </a>
</li>
);

const Button = props => (
    <button
        type={props.type}
        className="bg-red-600 hover:bg-red-500 transition-colors duration-300 text-white text-center py-2 px-4 rounded-full"   
    >
        {props.children}
    </button>
)

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
      {/* <div className="text-black-500 group  inline-flex  items-center md:gap-7 text-base font-medium">
          <div className="hover:text-gray-400">About us</div>
          <ol>Services</ol>
          <ol>Portfolio</ol>
          <ol>Join Us</ol>
      </div> */}
      <div>
          <ul className="inline-flex space md:gap-7 text-base font-medium">
              <NavItem href="/about-us" text="About us"/>
              <NavItem href="/severice" text="Services"/>
              <NavItem href="/portfolio" text="Porfolio"/>
              <NavItem href="/join-us" text="Join Us"/>
          </ul>
      </div>

    <Button type="button" >
        Contact Us
        </Button>
    </nav>
  );
}

export default Nav;
