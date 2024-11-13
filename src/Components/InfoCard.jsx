import React from 'react';
import infoIcon from '../assets/img/Our Vision/Black-1.jpg';

export const InfoCard = () => {
  return (
    <div className='border-2 w-[555px] h-[100px] p-4 flex items-center gap-4 rounded-lg'>
      <div className='w-[60px] h-[60px] rounded-md bg-secondary flex items-center justify-center'>
        <img src={infoIcon} alt='' />
      </div>
      <div>
        <h3 className='text-primary font-bold text-[20px]'>Get Instant Professional Advice</h3>
        <p>
          Ready to Help :<span className='text-accent ml-3'>+1 356 678 7897</span>{' '}
        </p>
      </div>
    </div>
  );
};
