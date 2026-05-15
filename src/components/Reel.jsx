import gsap, { Power4, ScrollTrigger } from 'gsap/all'
import React, { useEffect, useRef } from 'react'

const Reel = () => {
  const vid = useRef(null);
  const pin = useRef(null);
  const play = useRef(null);
  const reel = useRef(null);

  useEffect(()=> {
    gsap.registerPlugin(ScrollTrigger);
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger:pin.current,
        top: "0 0",
        pin:true,
        scrub: 1,
        
      }
    })
    tl.to(vid.current, {
      width: "100%",
      height: "100vh",
      ease: Power4.easeInOut,
    },'a')
    tl.to(play.current, {
      x: "-78%",
      scale: 1.5,
      ease: Power4.easeInOut,
    },'a')
    tl.to(reel.current, {
      x: "78%",
      scale: 1.5,
      ease: Power4.easeInOut,
    },'a')
  })

  return (
    <div ref={pin} className=' w-full h-screen bg-black relative'>
        <div ref={vid} className=' w-40 sm:w-80  overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>
        <video className=' w-full h-full object-cover' autoPlay muted loop src="/src/videos/vid5.mp4"></video>
        </div>
        <div className=' relative w-full h-screen text-white flex flex-col items-center justify-between py-24 sm:py-10'>
        <div className="flex gap-3  items-center">
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
          <div className='w-full flex gap-6 items-center justify-center sm:text-8xl text-5xl'>
            <h1 ref={play}>Play</h1>
            <h1 ref={reel}>Reel</h1>
          </div>
          <div className='w-[85%] sm:w-[30%]'>
            <p className='text-center text-[4vw] sm:text-base sm:  font-semibold sm:leading-none leading-3'>Our work is best experienced in motion. Don’t forget to put on your headphones.</p>
          </div>
        </div>
    </div>
  )
}

export default Reel