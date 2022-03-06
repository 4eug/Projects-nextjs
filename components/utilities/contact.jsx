import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
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
            className="fixed bg-ijikod-dark-blue text-white shadow-lg top-0 right-0 md:w-1/4 h-screen flex flex-col gap-10 z-50"
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

            {/* <div className="px-10 text-xl">
              Address
              <h2 className="text-sm mt-3 font-light">
                16 Ayuda Ritz Street Adenta, Accra — Ghana GS-012-3456
                mail@ijikod.com +233 123 456 789
              </h2>
            </div> */}

            {/* <div className="px-10 text-xl">
              Contact Us
              <input
                type="name"
                id="name"
                className="form"
                placeholder="Name"
                required
              />
              <input
                type="email"
                id="email"
                className="form"
                placeholder="Email"
                required
              />
              <textarea
                name="message"
                id="message"
                cols="10"
                rows="10"
                className="form"
                placeholder="Message"
              ></textarea>
              <button className="textarea">Submit</button>
            </div> */}

            <div className="h-16 absolute bottom-0 left-0 right-0 border-t border-gray-700 flex items-center text-center">
              <div className="w-1/2 h-full border-r border-gray-700 pt-2">
                <div className="flex flex-col item-center content-center">
                  <div className="ml-20">
                    <RiWhatsappFill />
                  </div>
                  WhatsApp us
                </div>
              </div>
              <div className="w-1/2 h-full pt-2">
                <div>icon</div>
                <div>Follow us on LinkedIn</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default ContactSideBar;
