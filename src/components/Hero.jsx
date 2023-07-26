import React from 'react';
import { images } from "../images";

function Hero() {
  return (
    <div className='w-full h-screen mb-20'>
       <img 
            className='top-0 left-0 w-full h-screen object-cover' 
            src={images.iceland} 
            alt="#" 
        /> 
       <div className='inset-0 bg-gradient-to-t from-[#1f1f1f] via-[#ffffff2d] to-transparent absolute top-0 left-0 w-full h-screen'/>
       <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1200px] m-auto absolute'>
            <p className='pb-4 uppercase'>A journey into the beauty of nature</p>
            <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Explore the magic of Iceland</h1>
            <p className='max-w-[600px] drop-shadow-2xl py-2 pb-5 text-xl'>
              Experience the mystical beauty of Iceland and immerse yourself 
              in an unforgettable adventure.
            </p>
            <button className='text-white'>Reserve Now</button>
        </div>
       </div>
    </div>
  )
}

export default Hero