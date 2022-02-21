import React from "react";
import AboutCard from '../utilities/cards/aboutCard';

function MainAbout () {
    return (
        <section className="mt-32 bg-gradient-to-t from-rose-900 to-rose-900">
              <div className='sm:w-4/5 lg:w-1/2 text-left mx-auto'>
                <h2 className="text-3xl text-white mt-1">About Us</h2>
                
            </div>

            <div className="md:px-16 2lg:px-32">
                <div className="flex flex-col md:flex-row md:justify-between gap-3 mt-20">
                    <AboutCard 
                    title=""
                    content="Whbkshgdhksahgdhaghgdhagdhsagglfgufdahlgdgsh"
                    src="/Mask Group 20.svg"
                    />

                </div>
            </div>
        </section>
    )
}

export default MainAbout;