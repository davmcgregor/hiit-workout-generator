import React, { Fragment } from 'react';
import { Exercises, Counter, Details } from '../';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Workout = ({ workout: { currentView } }) => {
  return (
    <div
      className={`text-center flex flex-col justify-center items-center ${
        currentView === 'Home' ? 'my-3' : 'my-6'
      }`}
    >
      <Details />
      {currentView === 'Home' ? <Exercises /> : <Counter />}
    </div>
  );
};

Workout.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Workout);
