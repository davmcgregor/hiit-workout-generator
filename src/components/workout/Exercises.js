import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Exercises = ({ workout: { exerciseList } }) => {
  return (
    <Fragment>
      <ul className='mt-3 grid grid-cols-2 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4'>
        {exerciseList.map((exercise, index) => (
          <li
            key={index}
            className='h-20 md:h-auto col-span-1 flex shadow-sm rounded-md'
          >
            <div className='flex-shrink-0 flex items-center justify-center w-16 bg-gray-700 text-white text-3xl leading-5 font-medium rounded-l-md'>
              {index + 1}
            </div>
            <div className='flex-1 flex items-center justify-between text-left border-t border-r border-b border-gray-200 bg-white rounded-r-md truncate md:p-2'>
              <div className='flex-1 px-2 md:px-4 py-1 text-sm leading-5 truncate '>
                <p className='text-gray-900 whitespace-normal font-medium hover:text-gray-600 transition ease-in-out duration-300 md:mb-2 text-xl leading-tight'>
                  {exercise.name}
                  {exercise.bodyweight && (
                    <span className='italic text-gray-500'> (bodyweight)</span>
                  )}
                </p>
                <p className='hidden md:block text-gray-500 text-base	whitespace-normal'>
                  {exercise.category}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

Exercises.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Exercises);
