import gsap, { ScrollTrigger } from "gsap/all";
// import { Timeline } from "gsap/gsap-core";
import React, { useEffect, useRef } from "react";

const News = () => {
  const img1 = useRef(null);
  const img2 = useRef(null);
  const img3 = useRef(null);
  const img4 = useRef(null);
  const parent = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        // markers: true,
        trigger: parent.current,
        start: "0% 50%",
        end: "0% -10%",
        scrub: 3,
      },
    });
    tl.to(img1.current, {
      x:"80%",
    },'a')
    tl.to(img2.current, {
      x:"80%",
    },'a')
    tl.to(img3.current, {
      x:"-80%",
    },'a')
    tl.to(img4.current, {
      x:"-220%",
    },'a')
  });

  return (
    <div
      ref={parent}
      className="w-full h-[75vh] sm:h-screen relative bg-white  "
    >
      <div className="w-32 sm:w-80 h-[50%] sm:h-[85%]  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 relative">
        <img
          className="w-full h-full object-cover"
          src="/src/images/img5.webp"
          alt=""
        />
      </div>
      <div
        ref={img1}
        className="w-32 sm:w-[25%] h-20 sm:h-[29%]  sm:left-[0] absolute top-1/3 sm:ranslate-x-1/2 translate-x-1/6"
      >
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="/src/videos/vid7.mp4"
        ></video>
      </div>
      <div
        ref={img2}
        className="w-32 hidden sm:block sm:w-[25%] h-20 sm:h-[32%] absolute -sm:bottom-32 top-[70%] sm:right-0 left-0 sm:translate-x-1/3  translate-x-1/5"
      >
        <img
          className="w-full h-full object-cover"
          src="/src/images/img7.webp"
          alt=""
        />
      </div>
      <div
        ref={img3}
        className="w-36 sm:w-[25%] sm:h-[40%] h-32 absolute top-[70%] right-[0]"
      >
        <video
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          src="/src/videos/vid6.mp4"
        ></video>
      </div>
      <div ref={img4} className="w-16 hidden sm:block sm:h-[40%] sm:w-[13%] h-24 absolute sm:top-[18%] sm:right-[0] top-1/3 right-[15%] -translate-x-1/4">
        <img
          className="w-full h-full object-cover"
          src="/src/images/img6.webp"
          alt=""
        />
      </div>
    </div>
  );
};

export default News;
