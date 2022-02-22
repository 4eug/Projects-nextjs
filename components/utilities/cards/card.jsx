import Image from "next/image";
import React from "react";

function Card(props) {
    return (
        <>
        <div className="card">
            <div className="h-10 w-10 absolute left-0 top-10 ">
                <Image 
                layout="fill"
                objectFit="contain"
                src={props.src}
                alt="Icons"
                />
            </div>
            <div className="text-left mt-24">
                <h3 className="text-2xl text-white mt-1">{props.title}</h3>
                <h2 className="text-gray-600 mt-2">{props.content}</h2>

            </div>

        </div>
        
        </>
    )
}

export default Card;