import Card from "../Card";
import Button from "../Button";
import { useRef, useEffect } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Power4 } from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger);

function Craft() {
  const container = useRef(null);

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cards",
          start: "top 10%",
          scrub: 1,
        },
      });
      tl.fromTo(
        ".card",
        {
          y: 600,
          scale: 0.9,
        },
        {
          y: 0,
          scale: 1.1,
          duration: 0.5,
          ease: Power4,
          transformOrigin: "bottom 50% -50",
        }
      );
    });
  }, container);

  return (
    <div
      data-color="cyan"
      className="craft section w-full sm:flex gap-x-40 justify-between 
          items-center px-8 py-8 sm:px-10 relative "
    >
      <div className="ltext sm:sticky sm:top-[10%] left-0 sm:w-1/2 ">
        <p
          className="ptag font-[Sansita] text-[2.6vh] sm:text-[2.9vh] 
                font-medium leading-[4.4vh] sm:leading-[4.2vh] "
        >
          BERC offers a comprehensive suite of services tailored to your unique
          needs. From consultation to implementation, our dedicated team strives
          for excellence at every step, contributing to the creation of
          energy-efficient, sustainable, and resilient buildings nationwide.
        </p>
        <h1 className="texthead font-[SansitaReg] text-[5vh] leading-[6vh] sm:text-[9.8vh] sm:leading-[12vh] mt-10 mb-10">
          Sustainable Building Solutions Aligned with SDGs & ECBC
        </h1>

        {/* button */}
        <Button bgColor="bg-none" text="OUR SOLUTIONS" />
      </div>
      <div
        ref={container}
        className="right cards sm:w-1/2 flex items-center justify-center"
      >
        <Card />
      </div>
    </div>
  );
}

export default Craft;
