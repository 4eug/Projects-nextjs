import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from "react-icons/io5";
import React from "react";

const ContactSideBar = (props) => {
  return (
    <AnimatePresence>
      {props.contactSideBar && (
        <>
          <motion.div
            initial={{ x: "100%" }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "100%",
            }}
            transition={{ type: "spring", bounce: 0, duration: 0.8 }}
            className="fixed bg-ijikod-dark-blue text-white shadow-lg top-0 right-0 w-1/3 h-screen flex flex-col gap-10 z-50"
          >
            <div className="border-b border-gray-700 p-5 flex justify-between">
              <h5>Contact Us</h5>
              <Close
                className="cursor-pointer"
                size={30}
                onClick={() => props.setContactSideBar((sideBar) => !sideBar)}
              />
            </div>

            <div className="px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi,
              expedita.
            </div>

            <div className="h-16 absolute bottom-0 left-0 right-0 border-t border-gray-700 flex items-center text-center">
              <div className="w-1/2 h-full border-r border-gray-700 pt-2">
                <div>icon</div>
                <div>WhatsApp</div>
              </div>
              <div className="w-1/2 h-full pt-2">
                <div>icon</div>
                <div>WhatsApp</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default ContactSideBar;
