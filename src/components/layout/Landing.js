import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorkout } from '../../actions/workout';

import PropTypes from 'prop-types';

const Landing = ({ getWorkout, workout: { exercises } }) => {
  useEffect(() => {
    getWorkout();
  }, [getWorkout]);

  const workoutList = exercises.map((exercise, index) => (
    <li key={index}>{exercise.name}</li>
  ));
  return (
    <Fragment>
      <button onClick={() => getWorkout()}>Random</button>
      <ul>{workoutList}</ul>
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
