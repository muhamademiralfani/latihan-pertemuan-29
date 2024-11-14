/* eslint-disable no-unused-vars */
import React from 'react';
import SectionTitle from '../Components/SectionTitle';
// import Button from '../Components/Button';
import Group65Image from '../assets/img/Group65.jpg';
import MaskGroupImage from '../assets/img/Maskgroup.jpg';
import InfoCard from '../Components/InfoCard';
import BlackIcon from '../assets/img/Black.png';
// import MainCard from '../Components/MainCard';
import Black5Icon from '../assets/img/Black-5.jpg';
import ServiceHero from '../assets/img/myHeade.jpg';
import Black6Icon from '../assets/img/Black-6.jpg';
import Black7Icon from '../assets/img/Black-7.jpg';
import Black8Icon from '../assets/img/Black-8.jpg';
import ContactCard from '../Components/ContactCard';
import ContactForm from '../Components/ContactForm';
import IconBlack from '../assets/img/OurVision/Black.png';
import IconLamp from '../assets/img/OurVision/lamp.png';
import { Helmet } from 'react-helmet';
import { useSchema } from '../context/SchemaContext';

const Home = () => {
  const schema = useSchema();
  const cardDataOurProcess = [
    {
      icon: Black5Icon,
      title: 'Research',
      description: 'It is a long established fact that a reader will be distracted by the readable content of a page.',
      number: '1',
    },
    {
      icon: Black6Icon,
      title: 'Design',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.',
      number: '2',
    },
    {
      icon: Black7Icon,
      title: 'Develope',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.',
      number: '3',
    },
    {
      icon: Black8Icon,
      title: 'Test',
      description: 'It is a long established fact that a reader will be distra by the readable content of a page.',
      number: '4',
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Home Page - Your Website Name</title>
        <meta name='description' content='Welcome to the home page of Your Website. We provide the best services in town.' />
        <script type='application/ld+json'>{JSON.stringify(schema.homepage)}</script>
      </Helmet>
      {/* Hero section START */}
      <div className='flex-col-reverse flex md:flex-row items-center justify-center px-46 lg:py-5 py-10 gap-x-40 lg:h-screen'>
        <div className='flex flex-col items-start justify-center'>
          <div className='flex flex-col justify-center min-h-32 pl-3 pr-10 mt-10 md:mt-2 lg:mt-0 '>
            <h1 className={`text-accent text-xl py-1 text-left font-bold`}>\ We are here \</h1>
            <p className={`text-primary text-[2rem] py-1 font-bold text-left`}>
              Better Insights For <br /> Business Growth
            </p>
          </div>
          <div className='pl-3'>
            <button className='self-center px-2 py-1 bg-accent text-white rounded-md hover:opacity-90 font-semibold'>View More</button>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <img src={Group65Image} alt='' className='max-w-sm lg:max-w-lg max-h-lg rounded-xl' />
        </div>
      </div>
      {/* Hero section END */}

      {/* About section START */}
      <div className='bg-secondary px-2 lg:px-0 md:px-2'>
        <div className='container lg:w-[80%] mx-auto flex flex-col lg:flex-row md:flex-col items-center justify-center  py-10'>
          <div className='flex flex-col items-center justify-center lg:pl-20 lg:px-0 md:px-2 px-2'>
            <img src={MaskGroupImage} alt='About Image' className='lg:max-w-lg max-h-lg rounded-5' />
          </div>
          <div className='flex flex-col items-start justify-center lg:pr-20 lg:pl-10 px-2 mt-10 lg:mt-0'>
            <SectionTitle sectionTitle='Better Insights For Business Growth' breadcrumb='We are here' />
            <p className='text-base lg:pl-3 lg:pr-20'>
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
            </p>
            <div className='mt-5 ml-3 lg:pr-20 w-full flex'>
              <InfoCard bgImage='bg-secondary' title='Get Instant Professional Advice' image={BlackIcon} desc='Ready to Help' number='+62 259519252' />
            </div>
          </div>
        </div>
      </div>
      {/* About section END */}

      {/* Planning section START */}
      <div className='flex flex-col items-center justify-center py-10 pb-20 lg:px-0 md:px-2 px-5'>
        <div className='w-full max-w-screen-lg mx-auto'>
          <div className='flex flex-col justify-center min-h-32 pl-3 pr-10'>
            <h1 className='text-accent text-xl py-1 text-center font-bold'>\ Planning \</h1>
            <p className='text-primary text-[2rem] py-1 font-bold text-center'>Our Process</p>
          </div>

          <div className='container mx-auto p-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {cardDataOurProcess.map((card, index) => (
                <div key={index} className='bg-secondary rounded-xl p-6 shadow-lg'>
                  <div className='flex justify-between items-start'>
                    <div className='bg-white p-2 rounded-lg overflow-hidden'>
                      <img className='w-12 h-12 object-contain' src={card.icon} alt='Icon' />
                    </div>
                    <p className='text-5xl text-[#0E1F51]/30 font-bold'>{card.number}</p>
                  </div>
                  <p className='text-lg font-extrabold text-primary my-4'>{card.title}</p>
                  <div className='flex gap-1 mb-4'>
                    <div className='bg-accent h-1 w-14 rounded-lg'></div>
                    <div className='bg-accent h-1 w-4 rounded-lg'></div>
                  </div>
                  <p className='text-gray-700'>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Planning section END */}

      {/* <section className='p-20'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-2'>
          <div className='col-span-1 mb-12'>
            <img className='object-cover w-4/5 mx-auto' src={ServiceHero} alt='' />
          </div>

          <div className='col-span-2'>
            <SectionTitle breadcrumb='What We Do' sectionTitle='We Develope Product That People Love to Use.' position='left' />

            <p className='mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-10'>
              <div className='mt-5 ml-3'>
                <div className=' p-4 flex flex-col sm:flex-row items-center gap-4 rounded-lg w-full bg-white'>
                  <div className={`w-full sm:w-auto h-[60px] rounded-md bg-secondary flex items-center justify-center`}>
                    <img src={BlackIcon} alt='' className='max-w-full h-auto object-contain' />
                  </div>
                  <div className='text-center'>
                    <h3 className='text-primary font-bold'>Get Instant Professional Advice</h3>
                    <p className='text-base'>
                      Ready to Help
                      <span className='text-accent ml-3'>+62 259519252</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className='mt-5 ml-3'>
                <div className=' p-4 flex flex-col sm:flex-row items-center gap-4 rounded-lg w-full bg-white'>
                  <div className={`w-full sm:w-auto h-[60px] rounded-md bg-secondary flex items-center justify-center`}>
                    <img src={BlackIcon} alt='' className='max-w-full h-auto object-contain' />
                  </div>
                  <div className='text-center'>
                    <h3 className='text-primary font-bold'>Get Instant Professional Advice</h3>
                    <p className='text-base'>
                      Ready to Help
                      <span className='text-accent ml-3'>+62 259519252</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

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

      <div>
        <SectionTitle sectionTitle={'Hey! Let’s Talk'} breadcrumb={'Get in Touch'} position={'center'} />
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center px-5 py-10 gap-8'>
        <ContactForm />
        <ContactCard />
      </div>
    </div>
  );
};

export default Home;
