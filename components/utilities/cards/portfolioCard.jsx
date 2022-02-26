import Image from "next/image";
import React from "react";

function PortfolioCard(props) {
  return (
    <section className={`w-full rounded-md p-14 ${props.className}`}>
      <div className="flex justify-between gap-10">
        <div className="w-full flex flex-col justify-between">
          <div className="relative h-10 w-36">
            <Image
              layout="fill"
              objectFit="contain"
              src={props.src}
              alt="company-logo"
            />
          </div>
          <div className="mt-20 text-white">{props.description}</div>
          <button className="white mt-5">Explore</button>

          <h5 className="tracking-tight text-ijikod-xxsm text-white dark:text-white mt-10">
            {props.techs}
          </h5>
        </div>

        <div className="w-full">
          <div className="relative h-full w-full">
            <Image
              layout="fill"
              objectFit="contain"
              src={props.leftSrc}
              alt="company-logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default PortfolioCard;
