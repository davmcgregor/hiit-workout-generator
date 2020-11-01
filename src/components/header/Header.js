import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Status, VolumeToggle } from '../';

const Header = ({ workout: { currentView } }) => {
  return (
    <div className='flex justify-between items-center w-screen my-6 px-4 md:px-8'>
      <VolumeToggle />
      <div>
        {currentView === 'Home' ? (
          <h1 className='font-extrabold text-center text-2xl md:text-4xl italic'>
            Hiit Workout Generator
          </h1>
        ) : (
          <Status />
        )}
      </div>
      <div className='w-24'>
        {currentView === 'Home' ? (
          <div className='font-bold text-right text-lg md:text-2xl italic underline'>
            <Link to='/about'>About</Link>
          </div>
        ) : (
          <div>%age complete</div>
        )}
      </div>
    </div>
  );
};

Header.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Header);
