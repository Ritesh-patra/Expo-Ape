import { motion } from "framer-motion";
import React from "react";
import { Power4 } from "gsap/all";
const Landing = () => {
  return (
    <div className="w-full h-[150vh] lg:h-[250vh]  relative">
      <div className="picture w-full h-full overflow-hidden">
        <img data-scroll data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1280x1811/filters:format(webp):quality(70)"
          alt=""
        />
      </div>

      <div className=" absolute top-0 max-w-screen-2xl mx-auto h-full px-6">
        <div className="para1 lg:px-16 text-white  mt-80">
          {[
            " Global digital design studio partnering",
            "with brands and businesses that create",
            "exceptional experiences where people",
            "live, work, and unwind.",
          ].map((item, index) => {
            return (
              <p key={index} className="font-semibold text-lg overflow-hidden">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: "0", opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                    delay: 0.2 * index,
                  }}
                  className=" inline-block origin-left"
                >
                  {item}
                </motion.span>
              </p>
            );
          })}
        </div>
        <div className="text-white mt-10 lg:px-10 font-[lasan]">
          {["Digital", "Design", "Experience"].map((item, index) => (
              <h1 key={index} className=" pb-3 lg:text-[15rem] text-[4rem] overflow-hidden tracking-tighter lg:font-regular lg:leading-[15rem] leading-none ">
                <motion.span
                  initial={{ rotate: 90, y: "100%", opacity: 0 }}
                  animate={{ rotate: 0, y: "0", opacity: 1 }}
                  transition={{
                    ease: Power4.easeInOut,
                    duration: 1.5,
                    delay: 1 + 0.2 * index,
                  }}
                  className=" inline-block origin-left"
                >
                  {item}
                </motion.span>
              </h1>
          ))}
        </div>
        <div className="para2 px-7 text-white font-semibold mt-10 lg:mt-20">
          <p className="lg:w-[38%] lg:text-xl lg:px-10">
            We help experience-driven companies thrive by making their audience
            feel the refined intricacies of their brand and product in the
            digital space. Unforgettable journeys start with a click.
          </p>
        </div>
        <h3 className="text-white mt-5 underline lg:ml-16 ml-7 font-semibold text-lg">
          The Studio
        </h3>
      </div>
    </div>
  );
};

export default Landing;
