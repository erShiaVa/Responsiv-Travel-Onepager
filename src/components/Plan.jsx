import React from 'react';
import { images } from '../images';

function Plan() {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className='row-span-3 object-cover w-full h-full p-2' src={images.iceland_three} alt="#" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={images.iceland_six} alt="#" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={images.iceland_four} alt="#" />
            <img className='row-span-3 object-cover w-full h-full p-2' src={images.iceland_five} alt="#" />
            <img className='row-span-2 object-cover w-full h-full p-2' src={images.iceland_two} alt="#" />
        </div>

        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, et.</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, explicabo architecto corrupti veritatis voluptates quibusdam tempora distinctio facere tenetur culpa nobis consequuntur magnam eligendi eveniet consequatur sit incidunt illo error.</p>
            <div>
                <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
                <button className='bg-black text-white border-black hover:shadow-xl'>Book your Trip</button>
            </div>
        </div>
    </div>
  )
}

export default Plan