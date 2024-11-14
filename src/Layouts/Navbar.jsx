import React, { useState } from 'react';
import Logo from '../assets/img/Vector.jpg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container mx-auto px-4 sm:px-6 lg:px-20'>
      <header className='flex items-center justify-between w-full bg-white border-b  border-gray-200 py-4 px-4 sm:px-6 lg:px-8'>
        <Link className='flex items-center gap-2 font-semibold text-xl text-black' to='/' aria-label='Brand'>
          <img src={Logo} alt='' />
          Logoipsum
        </Link>
        {/* Collapse Button */}
        <button type='button' onClick={toggleMenu} className='md:hidden flex items-center p-2 text-gray-800 hover:bg-gray-100 rounded-lg' aria-expanded={isMenuOpen} aria-label='Toggle navigation'>
          <svg className={`${isMenuOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M4 6h16M4 12h16M4 18h16' />
          </svg>
          <svg className={`${isMenuOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
          </svg>
          <span className='sr-only'>Toggle navigation</span>
        </button>
        {/* End Collapse Button */}
        {/* Desktop Menu */}
        <nav className='hidden md:flex gap-4 text-center items-center'>
          <Link to='/about' className='text-sm text-primary hover:text-accent'>
            About
          </Link>
          <Link to='/service' className='text-sm text-primary hover:text-accent'>
            Our Service
          </Link>
          <Link to='/portfolio' className='text-sm text-primary hover:text-accent'>
            Portfolio
          </Link>
          <Link to='/blog' className='text-sm text-primary hover:text-accent'>
            Blog
          </Link>
          <Link to='/contact' className='text-sm text-primary hover:text-accent mr-10'>
            Contact
          </Link>
          <button className='px-4 py-2 bg-accent text-white rounded-md'>Get In Touch</button>
        </nav>
      </header>

      {/* Sidebar for Mobile */}
      <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={toggleMenu}></div>

      <aside className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 z-50`}>
        <div className='p-4 flex items-center justify-between border-b'>
          <Link className='flex items-center gap-2 font-semibold text-xl text-black' to='/'>
            <img src={Logo} alt='' />
            Logoipsum
          </Link>
          <button onClick={toggleMenu} className='text-gray-800 hover:text-gray-600'>
            <svg className='h-6 w-6' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18L18 6M6 6l12 12' />
            </svg>
          </button>
        </div>
        <nav className='p-4 flex flex-col space-y-4'>
          <Link to='/about' className='text-primary hover:text-accent' onClick={toggleMenu}>
            About
          </Link>
          <Link to='/service' className='text-primary hover:text-accent' onClick={toggleMenu}>
            Our Service
          </Link>
          <Link to='/portfolio' className='text-primary hover:text-accent' onClick={toggleMenu}>
            Portfolio
          </Link>
          <Link to='/blog' className='text-primary hover:text-accent' onClick={toggleMenu}>
            Blog
          </Link>
          <Link to='/contact' className='text-primary hover:text-accent' onClick={toggleMenu}>
            Contact
          </Link>
          <button className='px-4 py-2 bg-accent text-white rounded-md w-full' onClick={toggleMenu}>
            Get In Touch
          </button>
        </nav>
      </aside>
    </div>
  );
};

export default Navbar;
