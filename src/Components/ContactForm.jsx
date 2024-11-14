import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const ContactForm = () => {
  // State untuk menyimpan nilai input
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    phoneNumber: '',
    details: '',
  });
  const sanitizedData = {
    firstName: DOMPurify.sanitize(formData.firstName),
    email: DOMPurify.sanitize(formData.email),
    phoneNumber: DOMPurify.sanitize(formData.phoneNumber),
    details: DOMPurify.sanitize(formData.details),
  };

  // Fungsi untuk mengupdate nilai input
  const handleChange = (e) => {
    // Tampilkan data yang sudah dibersihkan di console

    const { name, value } = e.target;
    setFormData({ ...sanitizedData, [name]: value });
  };

  // Fungsi untuk menangani submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Sanitized Form Data:', sanitizedData);
    // Sanitize data menggunakan DOMPurify untuk menghapus tag HTML dan script

    // Lanjutkan pengiriman data atau logika lainnya di sini
  };

  return (
    <div className='flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8 w-1/2'>
      <form onSubmit={handleSubmit}>
        <div className='grid gap-4'>
          {/* Input untuk First Name */}
          <div>
            <label htmlFor='firstName' className='sr-only'>
              First Name
            </label>
            <input
              type='text'
              name='firstName'
              id='firstName'
              value={formData.firstName}
              onChange={handleChange}
              className='py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
              placeholder='First Name'
            />
          </div>

          {/* Input untuk Email */}
          <div>
            <label htmlFor='email' className='sr-only'>
              Email
            </label>
            <input
              type='email'
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              autoComplete='email'
              className='py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
              placeholder='Email'
            />
          </div>

          {/* Input untuk Phone Number */}
          <div>
            <label htmlFor='phoneNumber' className='sr-only'>
              Phone Number
            </label>
            <input
              type='text'
              name='phoneNumber'
              id='phoneNumber'
              value={formData.phoneNumber}
              onChange={handleChange}
              className='py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
              placeholder='Phone Number'
            />
          </div>

          {/* Textarea untuk Details */}
          <div>
            <label htmlFor='details' className='sr-only'>
              Details
            </label>
            <textarea
              id='details'
              name='details'
              value={formData.details}
              onChange={handleChange}
              rows={4}
              className='py-3 px-4 block w-full border-gray-200 bg-secondary rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none'
              placeholder='Details'
            />
          </div>
        </div>

        {/* Tombol Submit */}
        <div className='mt-4 grid'>
          <button
            type='submit'
            className='w-32 py-3 px-4 inline-flex justify-center items-left gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-accent text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none'>
            Send Now
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
