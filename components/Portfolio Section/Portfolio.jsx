import React from "react";
import PortfolioCard from "../utilities/cards/portfolioCard";
import Image from "next/image";


function PortfolioSection() {
    return (
        <div className="mt-60 ml-60">
            <h1 className="text-black text-left text-ijikod-md">
                Portfolio</h1>

            <p className="w-1/4 mt-5">Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud</p>

            <div className="flex gap-16">
                <PortfolioCard
                content={"Design and development of a suite of apps for a Ghana based service management company"
                }
                src="/Ayuda.svg"
                techs="WEB DESIGN . MOBILE APP DESIGN . UI/UX DESIGN . WEB DEVELOPMENT . MOBILE DEVELOPMENT "
                />

            </div>
        </div>
        
    )
}

export default PortfolioSection;