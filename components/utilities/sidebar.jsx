import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from "react-icons/io5";
import React, { useState } from "react";
import { IoChevronDownOutline as ArrowDown } from "react-icons/io5";

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

            <div>
              <ul className="flex flex-col items-center gap-10">
                <li>test</li>

                <li>test</li>
                <li>test</li>

                <li>test</li>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default SideBar;
