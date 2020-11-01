import React from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

import PropTypes from 'prop-types';

import { Status, Details } from '../';

const Header = ({ workout: { currentView } }) => {
  return (
    <div>
      <h1 className='absolute top-0 inset-x-0 text-center mx-auto font-extrabold text-xl italic mt-4'>
        Hiit Workout Generator
      </h1>
      {currentView === 'Home' && (
        <div className='mt-3 mr-3 font-bold hover:underline absolute top-0 right-0'>
          <Link to='/about'>About</Link>
        </div>
      )}
      <div className=' flex flex-col justify-around items-center h-full pt-10'>
        <Status />
      </div>
      <Status />
      <Details />
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
