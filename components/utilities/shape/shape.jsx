import Image from "next/image"


function Shape () {
    return (
        <>
        <Image 
        layout="fill"
        objectFit="contain"
        src={"/shape.png"}
        alt="shape"
        />
        </>
    )
}

export default Shape;