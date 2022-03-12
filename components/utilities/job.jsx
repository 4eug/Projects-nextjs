import { AnimatePresence, motion } from "framer-motion";
import { IoCloseOutline as Close } from "react-icons/io5";
import React from "react";
import JobOpeningCard from "./cards/jobOpeningCard";

const JobSideBar = (props) => {
  const jobArray = [
    {
      title: "Frontend Developer Intern",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      id: 1,
    },
    {
      title: "Seasoned UI/UX Designer",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      id: 2,
    },
    {
      title: "NodeJS Developer",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      id: 3,
    },
    {
      title: "Graphics",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      id: 4,
    },
  ];

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
            className="fixed bg-ijikod-dark-blue text-white shadow-lg top-0 right-0 w-full sm:w-1/3 lg:w-1/4 h-screen overflow-y-auto flex flex-col gap-10 z-50"
          >
            <div className="border-b border-gray-700 p-5 flex justify-between">
              <h5 className="px-4">Job Openings</h5>
              <Close
                className="cursor-pointer"
                size={30}
                onClick={() => props.setJobSideBar((sideBar) => !sideBar)}
              />
            </div>

            {jobArray.map((item) => (
              <JobOpeningCard
                title={item.title}
                content={item.content}
                key={item.id}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
export default JobSideBar;
