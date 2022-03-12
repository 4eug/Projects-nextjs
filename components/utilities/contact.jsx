import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from "react-icons/io5";
import {
  RiLinkedinBoxFill,
  RiWhatsappFill,
} from "react-icons/ri";
import React from "react";
import ContactCard from "./cards/contactCard";

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
            className="fixed bg-ijikod-dark-blue text-white shadow-lg top-0 right-0 w-full sm:w-1/3 lg:w-1/4 h-screen flex flex-col gap-10 z-50 overflow-y-auto"
          >
            <div className="border-b border-gray-700 p-5 flex justify-between">
              <h5 className="md:px-4">Contact Us</h5>
              <Close
                className="cursor-pointer"
                size={30}
                onClick={() => props.setContactSideBar((sideBar) => !sideBar)}
              />
            </div>

            <ContactCard />

            <div className="h-16 absolute bottom-0 left-0 right-0 border-t border-gray-700 flex items-center text-center">
              <div className="w-1/2 h-full border-r border-gray-700 pt-2">
                <div className="flex flex-col item-center content-center">
                  <div className="ml-20">
                    <RiWhatsappFill size="25" />
                  </div>
                  <h5 className="text-ijikod-xsm">WhatsApp Us</h5>
                </div>
              </div>

              <div className="w-1/2 h-full pt-2">
                <div className="flex flex-col item-center content-center">
                  <div className="ml-20">
                    <RiLinkedinBoxFill size="25" />
                  </div>
                  <h5 className="text-ijikod-xsm">Follow us on LinkedIn</h5>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default ContactSideBar;
