import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { getWorkout, startCountdown } from '../../actions/workout';

import PropTypes from 'prop-types';

const buttonStyles =
  'inline-flex items-center justify-center uppercase tracking-wider w-auto md:w-64 text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-300 text-lg md:text-2xl py-2 md:py-5 px-6 md:px-10 rounded-lg mx-2 md:mx-4';

const HomeButtons = ({ startCountdown, getWorkout }) => {
  return (
    <Fragment>
      <span className='inline-flex rounded-md'>
        <button
          type='button'
          onClick={() => startCountdown()}
          className={buttonStyles}
        >
          <svg
            className='w-12 h-12 -ml-0.5 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z'
            ></path>
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path>
          </svg>
          Begin
        </button>
      </span>
      <span className='inline-flex rounded-md'>
        <button
          type='button'
          onClick={() => getWorkout()}
          className={buttonStyles}
        >
          <svg
            className='w-12 h-12 -ml-0.5 mr-2'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            ></path>
          </svg>
          Random
        </button>
      </span>
    </Fragment>
  );
};

HomeButtons.propTypes = {
  getWorkout: PropTypes.func.isRequired,
  startCountdown: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { getWorkout, startCountdown })(
  HomeButtons
);
