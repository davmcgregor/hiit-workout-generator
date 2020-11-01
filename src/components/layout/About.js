import React from 'react';
import { Link } from 'react-router-dom';

import { VolumeToggle } from '../';

const About = () => {
  return (
    <div className='bg-indigo-200 text-indigo-900 flex flex-col h-screen  transition ease-in-out duration-300'>
      <div className='flex justify-between items-center text-center w-screen my-6 px-4 md:px-8'>
        <VolumeToggle />
        <Link to='/' className='font-extrabold text-2xl md:text-4xl italic'>
          Hiit Workout Generator
        </Link>
        <div className='w-24 text-right'>
          <Link
            to='/'
            className='font-bold text-lg md:text-2xl italic underline'
          >
            Back
          </Link>
        </div>
      </div>

      <div className='flex flex-col h-full items-center pt-24'>
        <article className='prose lg:prose-xl text-indigo-900'>
          <p>
            For years parents have espoused the health benefits of eating garlic
            bread with cheese to their children, with the food earning such an
            iconic status in our culture that kids will often dress up as warm,
            cheesy loaf for Halloween.
          </p>
          <p>
            But a recent study shows that the celebrated appetizer may be linked
            to a series of rabies cases springing up around the country.
          </p>
        </article>
        <svg
          className='w-64 h-64 flex items-center'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4'
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default About;
