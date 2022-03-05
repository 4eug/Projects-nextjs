import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from "react-icons/io5";
import React, { useState } from "react";
import Link from "next/link";
import { IoChevronDownOutline as ArrowDown } from "react-icons/io5";

const NavItem = (props) => (
  <li>
    <Link href={props.href}>
      <a className="nav-link">{props.text}</a>
    </Link>
  </li>
);

const SideBar = (props) => {
  return (
    <AnimatePresence>
      {props.sideBar && (
        <>
          <motion.div
            initial={{ y: "-100%" }}
            animate={{
              y: 0,
              top: "15%",
            }}
            exit={{
              y: "-100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 1 }}
            className="fixed bg-white text-black shadow-lg top-0 right-0 w-full p-5 text-right flex flex-col items-end gap-10 z-30"
          >
            <div>
              {/* <Close
                className="cursor-pointer"
                size={30}
                onClick={() => props.setSidebar((sideBar) => !sideBar)}
              /> */}
            </div>

            <div className="m-auto">
              <ul className="flex flex-col items-center gap-10">
                <NavItem href="/about-us" text="About us" />
                <NavItem href="/services" text="Services" />
                <NavItem href="/portfolio" text="Portfolio" />
                <NavItem href="/join-us" text="Join Us" />
                <button className="red">Contact Us</button>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default SideBar;
