import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoClose, IoMenu } from "react-icons/io5";

const NavItem = (props) => (
  <li>
    <Link href={props.href}>
      <a className="nav-link">{props.text}</a>
    </Link>
  </li>
);

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      <div className="h-8 w-20 relative">
        <Image
          layout="fill"
          objectFit="contain"
          priority
          src={"/Logo.png"}
          alt="ijikod logo"
        />
      </div>

      <div className="hidden md:block">
        <ul className="inline-flex space md:gap-7 text-base font-medium">
          <NavItem href="/about-us" text="About us" />
          <NavItem href="/services" text="Services" />
          <NavItem href="/portfolio" text="Portfolio" />
          <NavItem href="/join-us" text="Join Us" />
        </ul>
      </div>

      <button className="red hidden md:block">Contact Us</button>

      <div className="block md:hidden ">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 text-black"
          aria-controls="mobile-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open Menu</span>
          {!isOpen ? <IoMenu size={35} /> : <IoClose size={35} />}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
