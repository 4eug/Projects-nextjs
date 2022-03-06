import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from "react-icons/io5";
import React from "react";
import JobOpeningCard from "./cards/jobOpeningCard";

const JobSideBar = (props) => {
  return (
    <AnimatePresence>
      {props.jobSideBar && (
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
            className="fixed bg-ijikod-dark-blue text-white shadow-lg top-0 right-0 w-1/4 h-screen flex flex-col gap-10 z-50"
          >
            <div className="border-b border-gray-700 p-5 flex justify-between">
              <h5 className="px-4">Job Openings</h5>
              <Close
                className="cursor-pointer"
                size={30}
                onClick={() => props.setJobSideBar((sideBar) => !sideBar)}
              />
            </div>

            <div className="px-10">
              <JobOpeningCard />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default JobSideBar;
