import React from "react";
import ServiceComponent from "./ServiceComponent";

function Services() {
  return (
    <div className="mt-20">
      <h2 className="text-center text-ijikod-wine-dark-primary">What We Do</h2>

      <div className="mt-32">
        <ServiceComponent
          title={"Web & Desktop Applications"}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat"
          src={"/webImage.svg"}
        />
      </div>

      <div className="mt-32">
        <ServiceComponent
          lgFlexDirection="lg:flex-row-reverse"
          title={"Mobile Apps"}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat"
          src={"/mobileImage.svg"}
        />
      </div>

      <div className="mt-32">
        <ServiceComponent
          title={"Internet of Things (IoT)"}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat"
          src={"/IoT.png"}
        />
      </div>

      <div className="mt-32">
        <ServiceComponent
          lgFlexDirection="lg:flex-row-reverse"
          title={"UI/UX"}
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat"
          src={"/UIUX.svg"}
        />
      </div>
    </div>
  );
}
export default Services;
