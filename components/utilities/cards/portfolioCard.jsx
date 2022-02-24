import Image from "next/image";
import React from "react";

function PortfolioCard(props) {
  return (
    <section className="mt-32">
        <div className="md:px-10 2lg:px-24">
            <div className="card">
                <div className="w-full sm:w-2/3 h/2/5 sm:h-full px-2 xxsm:px-12 sm:px-7 pt-8 sm:pt-0 py-3">
               <div className="text-left pt-6 relative">
                <Image 
                layout="fill"
                objectFit="contain"
                src={props.src}
                alt="company-logo"
                />
                <p className="text-left mt-20">
                    {props.content}
                </p>
                <button className="white mt-10">
                    Explore
                </button>

                <h5 className="mt-10">{props.techs}</h5>
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
