import React from "react";

const Footer = () => {
  return (
    <>
      <div className="w-full h-[90vh] bg-[#070707] pl-7 sm:hidden ">
        <div className="w-full h-[60vh] ">
          <div className="w-full h-fit text-white flex">
            <div className="w-[40%] h-[55vw] bg-transparent  py-16 relative">
              <h1 className="text-7xl z-[99] absolute font-[lasan] bg-transparent font-normal">
                Our Story
              </h1>
            </div>
            <div className="w-[60%] h-[55vw] bg-transparent py-16 relative">
              <video
                autoPlay
                muted
                loop
                className="w-[100vw] mt-5 object-cover absolute right-0 aspect-video"
                src="./src/videos/vid8.mp4"
              ></video>
            </div>
          </div>
          <p className=" text-white leading-none text-lg w-[85vw] mt-14 font-normal mx-auto">
            The story behind Exo Ape is one of exploration, creativity and
            curiosity.
          </p>
          <h2 className=" underline text-white mt-5 px-3">Our Story</h2>
          <hr className="mt-5 w-[85vw]" />
        </div>
        <div className="w-full h-[20vh] font-light  text-white flex">
          <div className="w-[40%] h-full  flex items-start gap-1 flex-col">
            <h1>Work</h1>
            <h1>Studio</h1>
            <h1>News</h1>
            <h1>Contact</h1>
          </div>
          <div className="w-[40%]  h-full flex items-start px-4 gap-1 flex-col">
            <h1>Behance</h1>
            <h1>Dribbble</h1>
            <h1>Twitter</h1>
            <h1>Instagram</h1>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#070707] h-screen hidden sm:block  overflow-hidden ">
        <div className="w-full h-[60vh] px-10 flex gap-7  ">
          <h1 className="font-[lasan] text-[11vw] text-[#E0CCBB] pl-20 py-6 leading-none">
            Our
            <br />
            Story
          </h1>
          <video
            className="w-[65vw] h-full"
            autoPlay
            muted
            loop
            src="/src/videos/vid8.mp4"
          ></video>
        </div>
        <p className="text-white px-24 w-[45vw] text-2xl">
          The story behind Exo Ape is one of exploration, creativity and
          curiosity.
        </p>
        <hr className="w-[86%] mx-auto mt-7" />

        <div className="w-full h-fit py-4 text-white px-24 flex">
          <div className="w-1/4 h-fit flex flex-col gap-1 ">
            <h1>Willem II Singel 8</h1>
            <h1>6041 HS, Roermond</h1>
            <h1>The Netherlands</h1>
            <h1>hello@exoape.com</h1>
          </div>
          <div className="w-1/4 h-fit flex flex-col gap-1 ">
            <h1>Work </h1>
            <h1>Studio</h1>
            <h1>News</h1>
            <h1>Contact</h1>
          </div>
          <div className="w-1/4 h-fit flex flex-col gap-1 ">
          <h1>Behance </h1>
            <h1>Dribbble</h1>
            <h1>Twitter</h1>
            <h1>Instagram</h1>
          </div>
          <div className="w-1/4 h-[17vh] flex items-end justify-end gap-1">
            <h1 className=" underline text-xl">Our Story</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
