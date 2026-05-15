import React from "react";

const News2 = () => {
  return (
    <div className="w-full h-[70vh] -mt-[4px] sm:h-[100vh] bg-white">
      <div className="w-full h-full flex flex-col items-center pt-20">
        <div className="flex gap-3   items-center">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4 "
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h1 className="text-sm sm:text-xl">work in motion</h1>
        </div>
        <div className="mt-10">
          <h1 className="text-6xl sm:text-9xl sm:font-lasan leading-none text-center">Spread</h1>
          <h1 className="text-6xl sm:text-9xl sm:font-lasan leading-none text-center">the News</h1>
        </div>
        <div className="w-full mt-5 sm:mt-16">
          <p className="text-center mx-auto w-2/3 sm:text-2xl sm:w-[40%]">
            Find out more about our work on these leading design and technology
            platforms.
          </p>
        </div>
        <div className="mt-5">
            <h1 className="sm:text-2xl">Browse all news</h1>
        </div>
      </div>
    </div>
  );
};

export default News2;
