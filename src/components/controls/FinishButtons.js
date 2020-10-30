import React from 'react';
import { connect } from 'react-redux';
import { getWorkout, startCountdown } from '../../actions/workout';

import PropTypes from 'prop-types';

const buttonStyles =
  'inline-flex items-center justify-center uppercase tracking-wider text-white bg-purple-600 hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700 transition ease-in-out duration-150 text-2xl py-5 px-10 rounded-lg mx-4 mb-8';

const HomeButtons = ({ startCountdown, getWorkout }) => {
  return (
    <div>
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
              d='M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
            ></path>
          </svg>
          New Workout
        </button>
      </span>
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
              d='M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z'
            ></path>
          </svg>
          Repeat Workout
        </button>
      </span>
    </div>
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