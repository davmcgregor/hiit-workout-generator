import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { toggleVolume } from '../../actions/workout';

const VolumeToggle = ({ toggleVolume, workout: { volume } }) => {
  return (
    <div className='cursor-pointer' onClick={() => toggleVolume()}>
      {volume ? (
        <svg
          className='w-12 h-12'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z'
          ></path>
        </svg>
      ) : (
        <svg
          className='w-12 h-12'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z'
            clip-rule='evenodd'
          ></path>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2'
          ></path>
        </svg>
      )}
    </div>
  );
};

VolumeToggle.propTypes = {
  toggleVolume: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { toggleVolume })(VolumeToggle);
