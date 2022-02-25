import Image from "next/image";
import React from "react";

function PortfolioCard(props) {
  return (
    <section className="mt-20">
        <div className="md: 2lg:px-24">
            <div className="card">
                <div className="w-full sm:w-2/3 h/2/5 sm:h-full px-2 xxsm:px-12 sm:px-7 pt-8 sm:pt-0 py-3">
               <div className="pt-6 relative">
                   <div className="object-left-top">
                   <Image 
                layout="fill"
                objectFit="contain"
                src={props.src}
                alt="company-logo"
                />

                   </div>
                <p className="mb-2 tracking-tight dark:text-white mt-20">
                    {props.content}
                </p>
                <button className="white mt-10">
                    Explore
                </button>

                <h5 className="mb-2 tracking-tight dark:text-white mt-10">{props.techs}</h5>
                </div>
            <div>

            </div>
        </div>

    </div>

    </div>

    </section>
  );
}

export default PortfolioCard;
