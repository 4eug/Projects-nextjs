import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IoMenu } from "react-icons/io5";

const NavItem = (props) => (
  <li>
    <Link href={props.href}>
      <a className="nav-link">{props.text}</a>
    </Link>
  </li>
);

function Nav(props) {
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
      <IoMenu size={30} className="block md:hidden" />
    </nav>
  );
}

export default Nav;
