import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { skipTimer, togglePause } from '../../actions/workout';

import PropTypes from 'prop-types';

const workingButtonStyles =
  'inline-flex items-center justify-center w-64 uppercase tracking-wider text-white bg-red-600 hover:bg-red-500 focus:outline-none focus:border-red-700 focus:shadow-outline-red active:bg-red-700 transition ease-in-out duration-300 text-2xl py-5 px-10 rounded-lg mx-4 mb-8';

const restingButtonStyles =
  'inline-flex items-center justify-center w-64 uppercase tracking-wider text-white bg-teal-600 hover:bg-teal-500 focus:outline-none focus:border-teal-700 focus:shadow-outline-teal active:bg-teal-700 transition ease-in-out duration-300 text-2xl py-5 px-10 rounded-lg mx-4 mb-8';

const pausedButtonStyles =
  'inline-flex items-center justify-center w-64 uppercase tracking-wider text-white bg-cool-gray-600 hover:bg-cool-gray-500 focus:outline-none focus:border-cool-gray-700 focus:shadow-outline-cool-gray active:bg-cool-gray-700 transition ease-in-out duration-300 text-2xl py-5 px-10 rounded-lg mx-4 mb-8';

const WorkoutButtons = ({
  togglePause,
  skipTimer,
  workout: { working, paused, resting },
}) => {
  const [buttonStyle, setButtonStyle] = useState(workingButtonStyles);

  const changeButtonStyle = () => {
    if (working || resting) {
      setButtonStyle(pausedButtonStyles);
    }

    if (working && paused) {
      setButtonStyle(workingButtonStyles);
    }

    if (resting && paused) {
      setButtonStyle(restingButtonStyles);
    }
  };

  useEffect(() => {
    if (paused) {
      setButtonStyle(pausedButtonStyles);
    } else {
      if (working) {
        setButtonStyle(workingButtonStyles);
      } else if (resting) {
        setButtonStyle(restingButtonStyles);
      }
    }
  }, [paused, working, resting]);

  return (
    <div>
      <span className='inline-flex rounded-md'>
        <button
          type='button'
          onClick={() => {
            togglePause();
            changeButtonStyle();
          }}
          className={buttonStyle}
        >
          {paused ? (
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
          ) : (
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
                d='M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z'
              ></path>
            </svg>
          )}
          {paused ? 'Resume' : 'Pause'}
        </button>
      </span>
      <span className='inline-flex rounded-md'>
        <button
          type='button'
          onClick={() => skipTimer()}
          className={buttonStyle}
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
              d='M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z'
            ></path>
          </svg>
          Skip
        </button>
      </span>
    </div>
  );
};

WorkoutButtons.propTypes = {
  workout: PropTypes.object.isRequired,
  skipTimer: PropTypes.func.isRequired,
  togglePause: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { skipTimer, togglePause })(
  WorkoutButtons
);
