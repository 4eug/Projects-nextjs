import Marquee from "react-fast-marquee";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

function Stack() {
  return (
    <Fade cascade>
      <div className="mt-20">
        <h2 className="text-center text-black">Our Tech Stack</h2>

        <div className="mt-10">
          <Marquee>
            <div className="h-ijikod-px-150 py-50 w-full relative">
              <Image
                layout="fill"
                objectFit="cover"
                priority
                src={"/stack.png"}
                alt="Web-Image"
              />
            </div>
          </Marquee>
        </div>
      </div>
    </Fade>
  );
}
export default Stack;
