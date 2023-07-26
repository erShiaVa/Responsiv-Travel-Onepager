import React from 'react';
import { BiHotel, BiTrip } from 'react-icons/bi';
import { MdFlightTakeoff } from 'react-icons/md';

function Plan() {
  return (
  <div className='max-w-[1200px] m-auto flex justify-center items-center flex-wrap gap-6 mb-20'>
    <div class="max-w-sm p-6 text-white text-center flex flex-col justify-center items-center">
      <BiTrip
        className='hover:scale-125 ease-in duration-300'
        size={55}
      />
      <p class="my-4 text-white">Unforgettable & well planned tours</p>
    </div>

    <div class="max-w-sm p-6 text-white text-center flex flex-col justify-center items-center">
      <MdFlightTakeoff
        className='hover:scale-125 ease-in duration-300'
        size={55}
      />
      <p class="my-4 text-white">Comfortable flight arrangements</p>
    </div>

    <div class="max-w-sm p-6  text-white text-center flex flex-col justify-center items-center">
      <BiHotel
        className='hover:scale-125 ease-in duration-300'
        size={55}
      />
      <p class="my-4 text-white">Unforgettable hotel experiences</p>
    </div>
  </div>
    
  )
}

export default Plan