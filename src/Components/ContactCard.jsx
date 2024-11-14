import React from 'react';

const ContactCard = () => {
  const contactCardData = [
    {
      icon: 'bx bx-phone-call',
      title: 'Call Anytime',
      description: [
        {
          des_1: '+ 91 23678 27867',
          des_2: '+ 91 67678 92878',
        },
      ],
    },
    {
      icon: 'bx bxs-envelope',
      title: 'Send Email',
      description: [
        {
          des_1: 'connect@itfirms.com',
          des_2: 'hello@itfirms.com',
        },
      ],
    },
    {
      icon: 'bx bxs-location-plus',
      title: 'Visit Us',
      description: [
        {
          des_1: '20 Island Park Road, ',
          des_2: 'New Jearsy, New York, USA',
        },
      ],
    },
  ];

  const contactCardSosial = [
    { icon: 'bx bxl-linkedin', link: 'https://www.linkedin.com/company/lumoshive/mycompany/' },
    { icon: 'bx bxl-instagram', link: 'https://www.instagram.com/lumoshive.official/' },
    { icon: 'bx bxl-facebook', link: 'https://web.facebook.com/lumoshive.official?_rdc=1&_rdr' },
    { icon: 'bx bxl-twitter', link: 'https://x.com/lumoshive?s=21' },
  ];

  return (
    <div className='px-[30px] pt-[35px]  border rounded-xl w-[360px] pb-[35px] flex flex-col '>
      <div className='flex flex-col gap-y-[30px]'>
        {contactCardData.map((item, index) => {
          return (
            <div key={index} className='flex gap-4'>
              <div className='px-5 rounded-md bg-secondary flex items-center justify-center text-accent text-center'>
                <i className={item.icon}></i>
              </div>

              <div>
                <h3 className='text-accent font-semibold text-[20px]'>{item.title}</h3>
                <div className='text-[14px]'>
                  {item.description.map((item, index) => (
                    <>
                      <p key={index}>{item.des_1}</p>
                      <p key={index}>{item.des_2}</p>
                    </>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className='flex flex-col gap-y-[30px]  mt-[50px]'>
        <h3 className='text-primary text-[24px] font-semibold text-center'>Follow Us</h3>
        <div className='flex  justify-between text-white'>
          {contactCardSosial.map((item, index) => (
            <a key={index} href={item.link} target='_blank' rel='noopener noreferrer' className='cursor-pointer'>
              <div className='border px-4 py-3 rounded-md bg-accent'>
                <i className={item.icon}></i>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
