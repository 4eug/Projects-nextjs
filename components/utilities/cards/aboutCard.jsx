import Image from "next/image";
import React from "react";

function AboutCard(props) {
  return (
    <>
      <div className="card">
        <div className="h-20 w-20 relative ">
          <Image
            layout="fill"
            objectFit="contain"
            src={props.src}
            alt="Icons"
          />
        </div>
        <div className="text-left mt-7">
          <h4 className="text-white">{props.title}</h4>
          <p className="mt-7 text-ijikod-sm">{props.content}</p>
        </div>
      </div>
    </>
  );
}

export default AboutCard;
