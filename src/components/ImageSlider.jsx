import React, { useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';


function ImageSlider() {
    const slides = [
        {
            url: 'https://cdn.pixabay.com/photo/2017/10/05/11/41/puffins-2819126_1280.jpg',
            title: 'First',
        },
        {
            url: 'https://cdn.pixabay.com/photo/2020/11/21/11/03/valley-5763670_1280.jpg',
            title: 'Second',
        },
        {
            url: 'https://cdn.pixabay.com/photo/2015/05/26/21/32/control-785555_1280.jpg',
            title: 'Third',
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex ===0;
        const newIndex = isFirstSlide ? slides.length -1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1;
        const newIndex = isLastSlide ? 0 : currentIndex +1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    }

  return (
    <div className='max-w-[1400px] h-[650px] w-full m-auto py-16 px-4 relative group'>
        <div
            className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
            style={{backgroundImage: `url(${slides[currentIndex].url})`}}>
        </div>
        {/* left arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 rounded-full 
                        p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactLeft 
                onClick={prevSlide}
                size={30}
            />
        </div>
        {/* right arrow */}
        <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 rounded-full 
                        p-2 group-hover:bg-black/20 text-white cursor-pointer'>
            <BsChevronCompactRight 
                onClick={nextSlide}
                size={30}
            />
        </div>

        <div className='flex top-4 justify-center py-2'>
            {slides.map((slide, slideIndex) => (
                <div 
                    className='text-2xl cursor-pointer' 
                    key={slideIndex} 
                    onClick={() => goToSlide(slideIndex)}
                >
                    <RxDotFilled/>
                </div>
            ))}
        </div>

    </div>
  )
}

export default ImageSlider