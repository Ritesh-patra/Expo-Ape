import { motion } from "framer-motion";
import React, { useState } from "react";
import { Power4 } from "gsap/all";

const Work = () => {
 const [elems, setElem] = useState([
  {
    heading: "Pixelflake",
    para: "Architectural Marketing Agency",
    image: "/images/img1.webp",
    video: "/videos/vid1.mp4",
  },
  {
    heading: "Pixelflake",
    para: "Architectural Marketing Agency",
    image: "/images/img2.webp",
    video: "/videos/vid2.mp4",
  },
  {
    heading: "Pixelflake",
    para: "Architectural Marketing Agency",
    image: "/images/img3.webp",
    video: "/videos/vid3.mp4",
  },
  {
    heading: "Pixelflake",
    para: "Architectural Marketing Agency",
    image: "/images/img4.webp",
    video: "/videos/vid4.mp4",
  },
]);
  return (
    <div className="w-full relative bg-zinc-100">
      <div className="max-w-screen-2xl mx-auto px-5  py-10 ">
        <div className="w-full h-fit sm:px-24">
          <div className="flex gap-3  items-center">
            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="icon w-2.5 sm:w-5"
              data-v-669b4a84=""
            >
              <path
                d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
                fill="currentColor"
                data-v-669b4a84=""
              ></path>
            </svg>
            <h1 className="text-sm sm:text-2xl sm:hidden block">featured</h1>
            <h1 className="text-sm sm:text-2xl sm:block hidden">
              featured Work
            </h1>
          </div>
          <h1 className="text-6xl font-[lasan] sm:text-[10rem] mt-4 overflow-hidden">
            <motion.span
              initial={{ rotate: 90, y: "40%", opacity: 0 }}
              whileInView={{ rotate: 0, y: "0", opacity: 1 }}
              transition={{
                ease: Power4.easeInOut,
                duration: 1.5,
              }}
              viewport={{ once: true }}
              className=" inline-block origin-left"
            >
              Work
            </motion.span>
          </h1>
          <p className="w-[100%] leading-none text-lg sm:mb-16 mt-5">
            Highlights of cases that we <br />
            passionately built with forward-thinking clients and friends over
            the years.
          </p>
        </div>

        <div className="elems w-full sm:flex-wrap sm:justify-center sm:gap-9 sm:flex sm:items-center` ">
          {elems.map((items, index) => (
            <div key={index} className="elem w-full sm:w-[40vw] ">
              <div className="videos  w-full  mt-10 h-[104vw] sm:h-[50vw] overflow-hidden relative">
                
                <motion.img
                  initial={{opacity:1}}
                  whileHover={{opacity: 0}}
                  data-scroll
                  data-scroll-speed="-.2"
                  className="w-full h-screen absolute top-0 left-0 sm:z-[99] object-cover hidden sm:block"
                  src={items.image}
                  alt=""
                />
                <video
                  className="w-full h-full object-cover absolute top-0 left-0 block scale-[1.15]"
                  autoPlay
                  muted
                  loop
                  src={items.video}
                ></video>
              </div>
              <div className="mt-4">
                <h3 className="font-semibold ">{items.heading}</h3>
                <h3>{items.para}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
