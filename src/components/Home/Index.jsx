import video from "../../assets/video/intro.mp4";
import Row from "../Row";
import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { gsap } from "gsap";
import styles from "./Style.module.css";
import { Power2, Power4 } from "gsap/gsap-core";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import { AiOutlineMenu } from "react-icons/ai";
import { BiMenu } from "react-icons/bi";

gsap.registerPlugin(ScrollTrigger);

gsap.set(".slidesm", { scale: 5 });

function Home() {
  const container = useRef(null);

  useEffect(() => {
    var clutter = "";
    const para = document.querySelector(".toptext");
    const characters = para.textContent.split("");
    characters.forEach(function (e) {
      clutter += `<span>${e}</span>`;
    });
    para.innerHTML = clutter;
    gsap.set(".toptext span", { opacity: 0.1 });
    gsap.to(".toptext span", {
      scrollTrigger: {
        trigger: ".home",
        start: "top 50%",
        end: "bottom 90%",
        scrub: 1,
      },
      opacity: 1,
      stagger: 0.03,
    });
  }, []);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".home",
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
    });
    tl.to(
      ".vdodiv",
      {
        clipPath: "circle(0% at 50% 50%)",
        ease: Power4,
      },
      "start"
    );
    tl.to(
      ".slidesm",
      {
        scale: 1,
        ease: Power2,
      },
      "start"
    );
    tl.to(
      ".lft",
      {
        xPercent: -10,
        stagger: 0.03,
        ease: Power4,
        duration: 1,
      },
      "start"
    );
    tl.to(
      ".rgt",
      {
        xPercent: 10,
        stagger: 0.03,
        ease: Power4,
        duration: 1,
      },
      "start"
    );
  }, container);

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    console.log(previous, latest);

    if (latest > previous) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <div
      ref={container}
      data-color="black"
      className="home section w-full h-[200vh] relative  "
    >
      <div className="w-full sticky top-0 left-0 ">
        {/* navbar */}
        <motion.div
          variants={{
            visible: { y: 0 },
            hidden: { y: "-100%" },
          }}
          animate={hidden ? "hidden" : "visible"}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="section w-[100vw] sm:w-full px-6 fixed top-0 left-0 z-[9] bg-gradient-to-r from-black/40 via-gray-700/20 to-black/40 backdrop-blur-md"
        >
          <div className="w-full flex sm:flex items-center justify-between  ">
            <div className="logo w-[12vh] h-[12vh] sm:w-[16vh] sm:h-[10vh] cursor-pointer z-[9] ">
              {/* logo */}
             
            </div>
            <div className="hidden md:flex gap-2 items-center z-[9] cursor-pointer ">
              {[
                "Home",
                "About",
                "Services",
                "Tools",
                "Impact",
                "News & Events",
                "Team",
                "Gallery",
              ].map((item, index) => (
                <h4
                  key={index}
                  className={`${styles.links} h-[3vh] relative py[2.4vh] px-[2.2vh] text-center flex flex-col font-[Sansita] text-[2.5vh] overflow-hidden font-medium leading-[2.9vh]`}
                >
                  <a className={`atag ${styles.atag} relative`}>{item} </a>
                </h4>
              ))}
            </div>

            <BiMenu
              style={{
                fontSize: "5.5vw",
              }}
              className=" inline-block sm:hidden z-[9] cursor-pointer"
            />
          </div>
        </motion.div>

        {/* video div */}
        <div
          className={` vdodiv w-full h-screen absolute z-[3] 
        top-0 left-0 overflow-hidden sm:overflow-visible ${styles.vdodiv}`}
        >
          <video
            className="absolute w-full h-screen object-cover top-1/2 left-1/2 
            -translate-x-1/2 -translate-y-1/2"
            autoPlay
            loop
            muted
            src={video}
          ></video>

          {/* Overlay Text */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="p-8 bg-gray-700 bg-opacity-80 text-white w-full text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-start">
                Buildings Energy Research Center
              </h1>
              <p className="text-xl md:text-2xl text-start">
                A Pathway Towards Clean, Green & Sustainable Energy Buildings
              </p>
            </div>
          </div>
        </div>

        {/* marquee div */}
        <div
          className="marqueecontainer w-full h-screen 
                relative overflow-hidden "
        >
          {/* top Heading div */}
          <div
            className=" heading absolute  top-[12%] sm:top-[7%] left-1/2 
                    -translate-x-1/2 w-72"
          >
            <h2 className="toptext text-[2.2vh] font-[Sansita] tracking-wide font-medium text-center">
              Crafting a new paradigm in Buildings Energy
            </h2>
          </div>

          <div
            className="slidesm absolute scale-[5] top-1/2 left-1/2
                    -translate-x-1/2 -translate-y-1/2 w-[90%]"
          >
            <iframe 
            width="100%"
            height="500" 
            src="https://www.youtube.com/embed/JZ4kNELEfKg?si=wXvFD2QM7WsYPhIo" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;