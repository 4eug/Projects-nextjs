import React from "react";
import { Fade } from "react-awesome-reveal";
import ServiceComponent from "./ServiceComponent";

function Services() {
  const serviceArray = [
    {
      title: "Web & Desktop Applications",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat",
      imgSrc: "/webImage.svg",
      id: 1,
    },
    {
      title: "Mobile Apps",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat",
      imgSrc: "/mobileImage.svg",
      id: 2,
      lgFlexDirection: "lg:flex-row-reverse",
    },
    {
      title: "Internet of Things (IoT)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat",
      imgSrc: "/IoT.png",
      id: 3,
    },
    {
      title: "UI/UX",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiat",
      imgSrc: "/UIUX.svg",
      id: 4,
      lgFlexDirection: "lg:flex-row-reverse",
    },
  ];

  return (
    <Fade cascade>
      <div id="#services" className="mt-20">
        <h2 className="text-center text-ijikod-wine-dark-primary">
          What We Do
        </h2>

        <div className="mt-32">
          {serviceArray.map((Item) => (
            <ServiceComponent
              title={Item.title}
              description={Item.description}
              src={Item.imgSrc}
              lgFlexDirection={Item.lgFlexDirection}
              key={Item.id}
            />
          ))}
        </div>
      </div>
    </Fade>
  );
}
export default Services;
