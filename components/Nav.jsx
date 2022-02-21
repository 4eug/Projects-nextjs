import React, { useState} from "react";
import Image from "next/image";
import Link from "next/link";
import { Transition } from "@headlessui/react";
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
    <div className="py-5">
    <nav className="fixed  top-0 inset-x-0 ">
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
      {/* <IoMenu size={30} className="block md:hidden" /> */}
      <div className="block md:hidden ">
							<div
								onClick={() => setIsOpen(!isOpen)}
								className="inline-flex items-center justify-center p-2 text-black"
								aria-controls="mobile-menu"
								aria-expanded="false"
							>
								<span className="sr-only">Open Menu</span>
								{!isOpen ? (<IoMenu size={35}/>	) : (<IoClose size={35}/>
								)}
							</div>
						</div>
              
            {/* <Transition
					show={isOpen}
					enter="transition ease-out duration-100 transform"
					enterFrom="opacity-0 scale-95"
					enterTo="opacity-100 scale-100"
					leave="transition ease-in duration-75 transform"
					leaveFrom="opacity-100 scale-100"
					leaveTo="opacity-0 scale-95"
				>
					{(ref) => (
						<div className="md:hidden" id="mobile-menu">
							<div
								ref={ref}
								className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3"
							>
								
								<NavItem href="/about-us" text="About us" />
          <NavItem href="/services" text="Services" />
          <NavItem href="/portfolio" text="Portfolio" />
          <NavItem href="/join-us" text="Join Us" />
							</div>
						</div>
					)}
				</Transition> */}
            
    </nav>
    </div>
  );
}

export default Nav;
