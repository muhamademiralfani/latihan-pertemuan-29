/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../Components/Header';
import SectionTitle from '../Components/SectionTitle';
import InfoCard from '../Components/InfoCard';
import MainCard from '../Components/MainCard';
import Banner from '../Components/Banner';
import bannerImg from '../assets/img/banner.jpeg';
import Black5Icon from '../assets/img/Black-5.jpg';
import ServiceHero from '../assets/img/myHeade.jpg';
import IconBlack from '../assets/img/OurVision/Black.png';
import IconLamp from '../assets/img/OurVision/lamp.png';
import { Helmet } from 'react-helmet';
import { useSchema } from '../context/SchemaContext';

const Services = () => {
  const schema = useSchema();
  return (
    <div className='mb-32'>
      <Helmet>
        <title>Our Services - Your Website Name</title>
        <meta name='description' content='Explore our range of services tailored to your needs.' />
        <script type='application/ld+json'>{JSON.stringify(schema.services)}</script>
      </Helmet>
      <Header breadcrumb='Services' />
      {/* section Service Start */}
      <div className='bg-secondary px-2 lg:px-0 md:px-2'>
        <div className='container lg:w-[80%] mx-auto flex flex-col lg:flex-row md:flex-col items-center justify-center  py-10'>
          <div className='flex flex-col items-center justify-center lg:pl-20 lg:px-0 md:px-2 px-2'>
            <img src={ServiceHero} alt='About Image' className='lg:max-w-lg max-h-lg rounded-5' />
          </div>
          <div className='flex flex-col items-start justify-center lg:pr-20 lg:pl-10 px-2 mt-10 lg:mt-0'>
            <SectionTitle sectionTitle='Better Insights For Business Growth' breadcrumb='We are here' />
            <p className='text-base lg:pl-3 lg:pr-20'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
            <div className='mt-5 ml-3 lg:pr-20 w-full flex gap-x-3 pr-3'>
              <InfoCard bgImage='bg-secondary' title='Our Vision' image={IconBlack} desc='It is a long esta-blished fact that' number='' />
              <InfoCard bgImage='bg-secondary' title='Our Goal' image={IconLamp} desc='It is a long esta-blished fact that' number='' />
            </div>
          </div>
        </div>
      </div>
      {/* Section Service END */}

      <section className='mt-32 p-20'>
        <SectionTitle breadcrumb='What We Do' sectionTitle='We Develope Product That People Love to Use.' position='center' />

        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-2'>
          <MainCard icon={Black5Icon} title='Web Development' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.' />

          <MainCard icon={Black5Icon} title='Web Development' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.' />

          <MainCard icon={Black5Icon} title='Web Development' description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.' />
        </div>
      </section>

      <section className='flex justify-center items-center my-10'>
        <div className='w-4/5 md:w-3/5'>
          <Banner image={bannerImg} text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.' button='Learn More' />
        </div>
      </section>
    </div>
  );
};

export default Services;
