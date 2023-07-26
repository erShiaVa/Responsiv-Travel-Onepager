import React from 'react';
import { images } from '../images';

function Polarlights() {
  return (
    <div className='max-w-[1200px] m-auto py-4 px-4 grid lg:grid-cols-2 gap-6 mb-20'>
        <div className='text-white flex flex-col justify-center'>
            <h2 className='text-right text-3xl font-semibold py-4 text-white/70'>Northern light tours</h2>
            <p className='text-right tracking-wide leading-7'>
            The Northern Lights, also known as the Aurora Borealis, are nature's captivating light display in the Arctic skies. 
            These mesmerizing celestial curtains of green, blue, and purple hues dance gracefully, 
            leaving spectators in awe. Witnessing this breathtaking phenomenon is an experience that touches the soul, 
            and our guided tours ensure you get the best chance to chase and embrace the magic of the Northern Lights
            </p>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 h-[50vh] gap-6'>
            <img 
                className='object-cover w-full h-full'
                src={images.polar_lights} alt="#"/>
            <img 
                className='object-cover w-full h-full'
                src={images.polar_lightstwo} alt="#"/>
            <img 
                className='object-cover w-full h-full'
                src={images.polar_lightsthree} alt="#" />
            <img 
                className='object-cover w-full h-full'
                src={images.polar_lightsfour} alt="#" />
        </div>
    </div>
  )
}

export default Polarlights