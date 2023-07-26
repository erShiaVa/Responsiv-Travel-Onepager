import React from 'react';
import { images } from '../images';

function Hiking() {
  return (
    <div className='max-w-[1200px] m-auto py-4 px-4 grid lg:grid-cols-2 gap-6 mb-20'>
        <div className='text-white flex flex-col justify-center'>
            <h2 className='text-right text-3xl font-semibold py-4 text-white/70'>Embark on Epic Icelandic Treks</h2>
            <p className='text-right tracking-wide leading-7'>
                Explore Iceland's untamed beauty through thrilling hiking adventures. Traverse rugged terrains, 
                cross ancient glaciers, and conquer magnificent peaks as you connect with nature like never before. 
                Our guided hiking tours offer a unique opportunity to witness breathtaking landscapes and create 
                unforgettable memories in the land of fire and ice.
            </p>
        </div>
        <div className='grid grid-cols-2 grid-rows-2 h-[50vh] gap-6'>
            <img 
                className='object-cover w-full h-full'
                src={images.hiking} alt="#"/>
            <img 
                className='object-cover w-full h-full'
                src={images.hiking_two} alt="#"/>
            <img 
                className='object-cover w-full h-full'
                src={images.hiking_three} alt="#" />
            <img 
                className='object-cover w-full h-full'
                src={images.hiking_four} alt="#" />
        </div>
    </div>
  )
}

export default Hiking