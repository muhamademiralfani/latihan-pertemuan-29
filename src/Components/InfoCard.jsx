import React from 'react';
import infoIcon from '../assets/img/Our Vision/Black-1.jpg';

// Build Component InfoCard and export it to Component Page with props data
const InfoCard = ({ bgImage, title, number = '', image, desc }) => {
  return (
    <div className='border-2 w-[555px] h-[100px] p-4 flex items-center gap-4 rounded-lg'>
      <div className={`w-[60px] h-[60px] rounded-md  ${bgImage} flex items-center justify-center`}>
        <img src={image} alt='' />
      </div>
      <div>
        <h3 className='text-primary font-bold text-[20px]'>{title}</h3>
        <p>
          {desc}
          <span className='text-accent ml-3'>{number}</span>{' '}
        </p>
      </div>
    </div>
  );
};

export default InfoCard;
