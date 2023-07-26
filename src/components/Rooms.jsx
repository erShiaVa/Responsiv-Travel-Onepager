import React from 'react';
import { images } from '../images';

function Rooms() {
  return (
    <div className='max-w-[1200px] h-[500px] bg-[#fdf5f1] mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-3'>
        <div className='px-4 lg:top-20 relative lg:col-span-1 col-span-2 '>
            <h3 className='text-2xl font-bold text-[#1f1f1f]'>Fine Interior Rooms</h3>
            <p className='pt-4 text-[#1f1f1f]'>
                Discover our cozy and comfortable rooms, the perfect oasis for your trip to Iceland. Each room is carefully designed to provide you with a 
                relaxing retreat after an eventful day. Enjoy the magnificent views of the surrounding nature and be pampered by our warm hospitality. 
                We pride ourselves on making your stay unforgettable and providing you with an authentic Icelandic experience.
            </p>
        </div>

        <div className='grid grid-cols-2 col-span-2 gap-2 mb-20'>
            <img className='row-span-2 object-cover w-full h-full' src={images.hotel_v} alt="#" />
            <img className='object-cover w-full h-full' src={images.hotel} alt="#" />
            <img className='object-cover w-full h-full' src={images.hotel_h} alt="#" />
        </div>
    </div>
  )
}

export default Rooms