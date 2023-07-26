import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { TiSocialPinterest } from 'react-icons/ti';

const Footer = () => {
  return (
    <div className='w-full mt-24 border-t-1 text-white/70 py-2 px-2 border-t-[1px] border-white/70' >
      <div className='w-full mx-auto grid grid-cols-2 md:grid-cols-6 border-b-[1px] border-white/70 py-8 px-4'>
        <div>
          <h6 className='font-bold uppercare pt-2'>Solutions</h6>
          <ul>
            <li className='py-1'>Travel</li>
            <li className='py-1'>Booking</li>
            <li className='py-1'>Flights</li>
            <li className='py-1'>Cruises</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Support</h6>
          <ul>
            <li className='py-1'>Pricing</li>
            <li className='py-1'>Documentation</li>
            <li className='py-1'>Tours</li>
            <li className='py-1'>Refunds</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Company</h6>
          <ul>
            <li className='py-1'>About</li>
            <li className='py-1'>Blog</li>
            <li className='py-1'>Jobs</li>
            <li className='py-1'>Press</li>
          </ul>
        </div>
        <div>
          <h6 className='font-bold uppercare pt-2'>Legal</h6>
          <ul>
            <li className='py-1'>Claims</li>
            <li className='py-1'>Privacy</li>
            <li className='py-1'>Terms</li>
            <li className='py-1'>Policies</li>
          </ul>
        </div>
        <div className='col-span-2 py-8 md:pt-2'>
          <p className='font-bold uppercase'>Subscribe to our newsletters</p>
          <p className='py-4'>
            The Latest deals, articles and resources sent to your inbox weekly.
          </p>
          <form className='flex flex-col sm:flex-row'>
            <input className='w-full p-2 mr-4 rounded-md mb-4 bg-[#fdf5f1]' type='email' placeholder='Enter email..' />
            <button className='p-2 mb-4 rounded-md'>Subscribe</button>
          </form>
        </div>
      </div>

      <div className='flex flex-col max-w-[1400px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-white/70'>
        <p className='py-4'>2022 Experiences, LLC. All rights reserved</p>
        <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>
          <FaFacebook 
            className='hover:scale-125 ease-in duration-200' 
          />
          <FaInstagram 
            className='hover:scale-125 ease-in duration-200' 
          />
          <FaTwitter 
            className='hover:scale-125 ease-in duration-200' 
          />
          <TiSocialPinterest 
            className='hover:scale-125 ease-in duration-200'
            size={30} 
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;