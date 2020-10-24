import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorkout } from '../../actions/workout';

import PropTypes from 'prop-types';

const Landing = ({ getWorkout, workout: { exercises, rounds } }) => {
  useEffect(() => {
    getWorkout();
  }, [getWorkout]);

  const workoutList = exercises.map((exercise, index) => (
    <li key={index}>{exercise.name}</li>
  ));
  return (
    <Fragment>
      <h1>{rounds} Rounds of {exercises.length} Exercises = {rounds * exercises.length} Minutes</h1>
      <button onClick={() => getWorkout()}>Random</button>
      <ol>{workoutList}</ol>
    </Fragment>
  );
};

Landing.propTypes = {
  getWorkout: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { getWorkout })(Landing);
