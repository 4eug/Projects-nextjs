import Image from "next/image";
import React from "react";

function ServiceComponent(props) {
  return (
    <div
      className={`flex ${props.flexDirection ?? 'flex-col'} w-full bg-slate-40 justify-center gap-10
      lg:gap-28 
      lg:h-ijikod-px-450
      ${props.lgFlexDirection ?? 'lg:flex-row'}
      
      `}
    >
      <div className="w-full flex items-center">
        <div>
          <h3 className="text-ijikod-wine-dark-primary">{props.title}</h3>
          <h5 className="text-ijikod-gray mt-5">{props.description}</h5>
        </div>
      </div>

      <div className="w-full">
        <div className="h-full w-full relative hidden lg:block">
          <Image
            layout="fill"
            objectFit="cover"
            priority
            src={props.src}
            alt="Web-Image"
          />
        </div>
        <div className="h-ijikod-px-450 w-full relative lg:hidden">
          <Image
            layout="fill"
            objectFit="cover"
            priority
            src={props.src}
            alt="Web-Image"
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceComponent;
