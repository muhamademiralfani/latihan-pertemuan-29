import React from 'react';
import Header from '../Components/Header';
import BlackIcon from '../assets/img/Black.jpg';
import MaskGroupImage from '../assets/img/Mask Group.jpg';
import InfoCard from '../Components/InfoCard';
import SectionTitle from '../Components/SectionTitle';
import Leader_1 from '../assets/img/Rectangle 14.jpg';
import Leader_2 from '../assets/img/Rectangle 15.jpg';
import Banner from '../Components/Banner';
import Banner_1 from '../assets/img/banner2.jpeg';

const About = () => {
  return (
    <>
      {' '}
      <Header breadcrumb={'About'} />
      <div className='flex flex-row items-center justify-center px-8 py-10 bg-secondary'>
        <div flex flex-col items-center justify-center>
          <img src={MaskGroupImage} alt='' className='max-w-lg max-h-lg rounded-5' />
        </div>

        <div className='flex flex-col items-start justify-center px-5'>
          <SectionTitle sectionTitle='Better Insights For Business Growth' breadcrumb='We are here' />
          <p className='text-base pl-3 pr-10'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed
          </p>
          <div className='mt-5 ml-3'>
            <InfoCard bgImage='bg-secondary' title='Get Instant Professional Advice' image={BlackIcon} desc='Ready to Help' number='+62 259519252' />
          </div>
        </div>
      </div>
      <section className='max-w-7xl mx-auto px-4 py-12'>
        {/* Header */}
        <div className='text-center mb-12'>
          <p className='text-red-500 text-sm font-medium mb-2'>\Team\</p>
          <h2 className='text-navy-900 text-4xl font-bold'>Our Leaders</h2>
        </div>
        {/* Grid Container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 '>
          {/* Leader Card 1 */}
          <div className='flex flex-col items-center'>
            <div className='w-full aspect-square rounded-lg overflow-hidden mb-4'>
              <img src={Leader_1} alt='Larry F. Burnett' className='w-full h-full object-cover' />
            </div>
            <h3 className='text-red-500 text-lg font-medium'>Larry F. Burnett</h3>
            <p className='text-gray-600'>CEO</p>
          </div>
          {/* Leader Card 2 */}
          <div className='flex flex-col items-center'>
            <div className='w-full aspect-square rounded-lg overflow-hidden mb-4'>
              <img src={Leader_2} alt='Meghan J. Webb' className='w-full h-full object-cover' />
            </div>
            <h3 className='text-red-500 text-lg font-medium'>Meghan J. Webb</h3>
            <p className='text-gray-600'>CTO</p>
          </div>
          {/* Leader Card 3 */}
          <div className='flex flex-col items-center'>
            <div className='w-full aspect-square rounded-lg overflow-hidden mb-4'>
              <img src={Leader_1} alt='Yvonne J. Cullum' className='w-full h-full object-cover' />
            </div>
            <h3 className='text-red-500 text-lg font-medium'>Yvonne J. Cullum</h3>
            <p className='text-gray-600'>CFO</p>
          </div>
          {/* Leader Card 4 */}
          <div className='flex flex-col items-center'>
            <div className='w-full aspect-square rounded-lg overflow-hidden mb-4'>
              <img src={Leader_2} alt='Diana H. Williams' className='w-full h-full object-cover' />
            </div>
            <h3 className='text-red-500 text-lg font-medium'>Diana H. Williams</h3>
            <p className='text-gray-600'>COO</p>
          </div>
        </div>
        {/* Grid Container */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12'>
          {/* Leader Card 1 */}
          <div className='flex flex-col items-center'>
            <div className='w-full aspect-square rounded-lg overflow-hidden mb-4'>
              <img src={Leader_1} alt='Larry F. Burnett' className='w-full h-full object-cover' />
            </div>
            <h3 className='text-red-500 text-lg font-medium'>Larry F. Burnett</h3>
            <p className='text-gray-600'>CEO</p>
          </div>
          {/* Leader Card 2 */}
          <div className='flex flex-col items-center'>
            <div className='w-full aspect-square rounded-lg overflow-hidden mb-4'>
              <img src={Leader_2} alt='Meghan J. Webb' className='w-full h-full object-cover' />
            </div>
            <h3 className='text-red-500 text-lg font-medium'>Meghan J. Webb</h3>
            <p className='text-gray-600'>CTO</p>
          </div>
          {/* Leader Card 3 */}
          <div className='flex flex-col items-center'>
            <div className='w-full aspect-square rounded-lg overflow-hidden mb-4'>
              <img src={Leader_1} alt='Yvonne J. Cullum' className='w-full h-full object-cover' />
            </div>
            <h3 className='text-red-500 text-lg font-medium'>Yvonne J. Cullum</h3>
            <p className='text-gray-600'>CFO</p>
          </div>
          {/* Leader Card 4 */}
          <div className='flex flex-col items-center'>
            <div className='w-full aspect-square rounded-lg overflow-hidden mb-4'>
              <img src={Leader_2} alt='Diana H. Williams' className='w-full h-full object-cover' />
            </div>
            <h3 className='text-red-500 text-lg font-medium'>Diana H. Williams</h3>
            <p className='text-gray-600'>COO</p>
          </div>
        </div>
      </section>
      <div className='flex justify-center mt-12 lg:w-[1000px] mx-auto items-center'>
        <Banner image={Banner_1} text='We are a team of experts in the field of finance and accounting, dedicated to providing the best services to our clients.' button='Learn More' />
      </div>
    </>
  );
};

export default About;
