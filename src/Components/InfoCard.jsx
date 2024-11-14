import React from 'react';

const InfoCard = ({ bgImage, title, number = '', image, desc }) => {
  return (
    <div className='px-4 lg:py-2 md:py-4 py-4 flex flex-col sm:flex-row items-center gap-4 rounded-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl bg-white shadow-md'>
      <div className={`lg:w-16 lg:h-16 h-12 w-12 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-md ${bgImage} flex items-center justify-center`}>
        <img src={image} alt='' className='max-w-full h-auto object-contain' />
      </div>
      <div className='text-center sm:text-left'>
        <h3 className='text-primary font-bold text-lg sm:text-xl md:text-base'>{title}</h3>
        <p className='text-sm sm:text-base md:text-lg text-gray-700'>
          {desc}
          {number && <span className='text-accent ml-2 sm:ml-3'>{number}</span>}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
