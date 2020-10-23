import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorkout } from '../../actions/workout';

import PropTypes from 'prop-types';

const Landing = ({ workout, getWorkout }) => {
  useEffect(() => {
    getWorkout();
  }, [getWorkout]);

  const workoutList = workout.map((exercise) => <li>{exercise}</li>);
  return (
    <Fragment>
      <ul>{workoutList}</ul>
    </Fragment>
  );
};

Landing.propTypes = {
  getWorkout: PropTypes.func.isRequired,
  workout: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { getWorkout })(Landing);
