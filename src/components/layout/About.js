import React from 'react';
import { Link } from 'react-router-dom';

import { VolumeToggle } from '../';

const About = () => {
  return (
    <div className='bg-indigo-200 text-indigo-900 min-h-screen flex flex-col justify-between h-full px-4 sm:px-6 lg:px-8 items-center transition ease-in-out duration-300'>
      <div className='flex justify-between items-center text-center w-screen my-6 px-4 md:px-8'>
        <VolumeToggle />
        <Link
          to='/'
          className='font-extrabold leading-8 text-center text-3xl md:text-4xl italic'
        >
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

      <div className='flex flex-col h-full items-center pt-16'>
        <article className='prose lg:prose-xl text-indigo-900'>
          <p>
            The app was built born out of frustrations of not being able to use
            the gym during COVID-19 lockdowns throughtout 2020, and wasting away
            by constantly using runs as my main workout. After buying cheap
            weights and youtubing things like{' '}
            <a
              href='https://www.youtube.com/watch?v=z3KYIe5ptQw'
              title='hiit workout'
              aria-label='hiit workout'
            >
              <i>home dumbell exercises</i>
            </a>
            , I realised I'd actually been doing "Hiit" workouts for a month
            before knowing what they were. From the moment I noticed I was
            running stronger than ever from the cardio benefits of these
            exercises, I was a convert and set out to build this project.
          </p>
          <p>
            Doing Hiit workouts on a tiny patch of floor in a 30sqm London
            apartment has been far from ideal! But by sticking with them
            hopefully you can get the same results I have. The idea of this app
            is to completely randomise workouts so that two days will never be
            the same.
          </p>
          <p>
            The next iteration will be a mobile app to test my React Native
            skills. You can find more of my work at:{' '}
            <a
              href='https://www.davidmcgregor.dev'
              title='David McGregor'
              aria-label='David McGregor'
              target='_blank'
            >
              davidmcgregor.dev
            </a>
          </p>
        </article>
        <a
          href='https://www.davidmcgregor.dev'
          title='David McGregor'
          aria-label='David McGregor'
          target='_blank'
        >
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
        </a>
      </div>
    </div>
  );
};

export default About;
