import React, { Fragment } from 'react';
import { Exercises, Counter } from '../';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Workout = ({ workout: { currentView } }) => {
  return (
    <Fragment>{currentView === 'Home' ? <Exercises /> : <Counter />}</Fragment>
  );
};

Workout.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Workout);
