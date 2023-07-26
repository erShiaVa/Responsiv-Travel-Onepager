import React from 'react'
import { images } from '../images'

function Offers() {
  return (
    <div className='w-full h-screen relative'>
      <img 
          className='way__img w-full h-screen object-cover'
          src={images.iceland_oneway} alt="#" 
      />
      <div className='inset-0 bg-gradient-to-t from-[#1f1f1f] via-[#ffffff0b] to-transparent absolute top-0 left-0 w-full h-screen'/>
      <div className='inset-0 bg-gradient-to-b from-[#1f1f1f] via-[#ffffff0b] to-transparent absolute top-0 left-0 w-full h-screen'/>
      <div className='flex justify-center'>
         <h2 className='text-white/70 text-center font-bold text-5xl absolute bottom-[45%]'>Discover Iceland in one way</h2>
         <button className='text-white absolute bottom-[36%]'>book now</button>
      </div>
     
    </div>
  )
}

export default Offers