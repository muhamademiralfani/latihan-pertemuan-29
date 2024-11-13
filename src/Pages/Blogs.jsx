import React from 'react';
import Header from '../Components/Header';
import SectionTitle from '../Components/SectionTitle';
import MainBlogCard from '../Components/MainBlogCard';
import BlogCard from '../Components/BlogCard';
import BlogImage from '../assets/img/Rectangle 25-2.jpg';
import BlogProfile from '../assets/img/Ellipse 4-1.jpg';

const Blogs = () => {
  return (
    <>
      <Header breadcrumb={'Blogs'} />
      <div className='flex flex-col items-center justify-center mt-20'>
        <SectionTitle sectionTitle={'Latest Blogs'} breadcrumb={'Our Blogs'} />
        <div className='flex mx-auto justify-center'>
          <div>
            <MainBlogCard />
          </div>
          <div>
            <div>
              <MainBlogCard />
            </div>
            <dir>
              <MainBlogCard />
            </dir>
          </div>
        </div>
      </div>

      <div className='flex flex-col items-center justify-center mt-20 bg-secondary pt-24'>
        <SectionTitle sectionTitle={'Latest Blogs'} breadcrumb={'Our Blogs'} />
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-8'>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
          <div>
            <BlogCard image={BlogImage} title={'The Most Popular Bisnis of the year'} imageProfile={BlogProfile} name={'Ranold Jeff.'} date={'2023-02-01'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
