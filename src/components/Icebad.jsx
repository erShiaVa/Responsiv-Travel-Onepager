import React from 'react';
import { images } from "../images";

function Icebad() {
  return (
    <div className='max-w-[1200px] m-auto py-4 px-4 grid lg:grid-cols-2 gap-6 mb-20'>
        <div className='grid grid-cols-2 grid-rows-2 h-[50vh] gap-6'>
            <img 
                className='object-cover w-full h-full'
                src={images.icebad} alt="#"/>
            <img 
                className='object-cover w-full h-full'
                src={images.icebad_four} alt="#"/>
            <img 
                className='object-cover w-full h-full'
                src={images.icebad_three} alt="#" />
            <img 
                className='object-cover w-full h-full'
                src={images.icebad_two} alt="#" />
        </div>
        
        <div className='text-white flex flex-col justify-center'>
            <h2 className='text-left text-3xl font-semibold py-4 text-white/70'>Indulge in Geothermal Bliss</h2>
            <p className='text-left tracking-wide leading-7'>
                Immerse yourself in the ultimate relaxation with our unparalleled thermal bath experience. Discover the 
                rejuvenating power of Iceland's geothermal springs as you unwind amidst stunning natural settings. 
                Let the soothing warm waters wash away your cares and leave you feeling refreshed and revitalized.
            </p>
        </div>
    </div>
  )
}

export default Icebad