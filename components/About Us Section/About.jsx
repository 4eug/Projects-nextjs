import React from "react";
import AboutCard from "../utilities/cards/aboutCard";
import UpperAboutCard from "../utilities/cards/upperAboutCard";

function AboutSection() {
  const aboutArray = [
    {
      title: "Excellence",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      imgSrc: "/core-value-icon-1.svg",
      id: 1,
    },
    {
      title: "Vision",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      imgSrc: "/core-value-icon-2.svg",
      id: 2,
    },
    {
      title: "Impact",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      imgSrc: "/core-value-icon-3.svg",
      id: 3,
    },
  ];

  const upperArray = [
    {
      title: "Vision",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      imgSrc: "/rocket.svg",
      id: 1,
    },
    {
      title: "Vision",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias,illo tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam, quis nostrud exercitation ullamco laboris nisi ut",
      imgSrc: "/target.svg",
      id: 2,
    },
  ];

  return (
    <div>
      <h2>About Us</h2>

      <div className="flex flex-col gap-10 mt-10 items-center lg:flex-row lg:items-end">
        <div className="lg:w-1/3">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. tempor incididunt ut labore et dolore magna aliqua. Ut enim
          ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut
        </div>

        {upperArray.map((item) => (
          <UpperAboutCard
            title={item.title}
            content={item.content}
            src={item.imgSrc}
            key={item.id}
          />
        ))}
      </div>

      <div className="mt-36">
        <h3 className="text-center">Our Core Values</h3>
        <div className="flex flex-col lg:flex-row gap-16 mt-16">
          {aboutArray.map((item) => (
            <AboutCard
              title={item.title}
              content={item.content}
              src={item.imgSrc}
              key={item.id}
            />
          ))}
        </div>

        <div className="mt-32 flex items-center justify-center">
          <button className="dark">Download Company Profile</button>
        </div>
      </div>
    </div>
  );
}
export default AboutSection;
