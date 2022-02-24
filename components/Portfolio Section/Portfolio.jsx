import React from "react";
import PortfolioCard from "../utilities/cards/portfolioCard";
import Image from "next/image";


function PortfolioSection() {
    return (
        <div className="mt-60 ml-60">
            <h1 className="text-black text-left text-ijikod-md">
                Portfolio</h1>

            <p>Lorem ipsum dolor sit amet, consectetur 
                adipisicing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
                 Ut enim ad minim veniam, quis nostrud</p>

            <div className="block gap-16">
                <PortfolioCard
                content={"Design and development of a suite of apps for a Ghana based service management company"
                }
                src="/core-value-icon-2.svg"
                techs="WEB DESIGN . MOBILE APP DESIGN . UI/UX DESIGN . WEB DEVELOPMENT . MOBILE DEVELOPMENT "
                />

            </div>
        </div>
        
    )
}

export default PortfolioSection;