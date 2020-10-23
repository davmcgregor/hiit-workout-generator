import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorkout } from '../../actions/workout';

import PropTypes from 'prop-types';

const Landing = ({ exercises, getWorkout }) => {
  useEffect(() => {
    getWorkout();
  }, [getWorkout]);

  const workoutList = exercises.map((exercise, index) => (
    <li key={index}>{exercise.name}</li>
  ));
  return (
    <Fragment>
      <ul>{workoutList}</ul>
    </Fragment>
  );
};

Landing.propTypes = {
  getWorkout: PropTypes.func.isRequired,
  exercises: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  exercises: state.workout.exercises,
});

export default connect(mapStateToProps, { getWorkout })(Landing);
