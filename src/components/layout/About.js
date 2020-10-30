import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className='bg-pink-200 text-pink-900 h-screen w-full'>
      <div className='mt-3 mr-3 font-bold underline absolute top-0 right-0'>
        <Link to='/'>Back</Link>
      </div>
      <div className='flex flex-col h-full items-center'>
        <Link
          to='/'
          className='text-center font-extrabold text-3xl italic mt-6'
        >
          Hiit Workout Generator
        </Link>
        <article className='prose lg:prose-xl'>
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
          <svg
            class='w-64 h-64'
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
        </article>
      </div>
    </div>
  );
};

export default About;
