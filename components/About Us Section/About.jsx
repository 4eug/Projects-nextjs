import React from 'react';
import Card from '../utilities/cards/card';
import AboutCard from '../utilities/cards/aboutCard';

function AboutSection() {
    return (
        <section className="bg-gradient-to-t from-rose-900 to-rose-900">  
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

            <div className="text-center mx-auto">
                <h2 className="text-3xl text-white mt-1">
                Our Core Values
                </h2>
            </div>

            <div className="md:px-16 2lg:px-32">
            <div className="flex flex-col md:flex-row md:justify-between gap-3 mt-20">
                <Card 
                title="Excellence"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure risus, dapibus 
                rutrum ipsum gravida et. Integer lectus nisi, facilisis sit"
                src="/Mask Group 20.svg"
                />
                <Card 
                title="Innovation"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laitor risus, dapibus 
                rutrum ipsum gravida et. Integer lectus nisi, facilisis sit"
                src="/Mask Group 19.svg"
                />
                <Card 
                title="Continuous Learning"
                content="Lorem ipsum dolor sit amet, consectetur adipisicing 
                elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laitor risus, dapibus 
                rutrum ipsum gravida et. Integer lectus nisi, facilisis sit"
                src="/Mask Group 19.svg"
                />
            </div>
        </div>
        <div className="mt-32 flex items-center justify-center h-20">
        <button className="dark">
            Download Company Profile
            </button>
        </div>
        </section>
        

        
        
    )
}
export default AboutSection;