import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorkout, startCountdown } from '../../actions/workout';

import PropTypes from 'prop-types';

const Landing = ({
  startCountdown,
  getWorkout,
  workout: { exercises, rounds, current },
}) => {
  useEffect(() => {
    getWorkout();
  }, [getWorkout]);

  const workoutList = exercises.map((exercise, index) => (
    <li key={index}>{exercise.name}</li>
  ));

  return (
    current === 'Landing' && (
      <Fragment>
        <h1>
          {rounds} Rounds of {exercises.length} Exercises ={' '}
          {rounds * exercises.length} Minutes
        </h1>
        <button onClick={() => getWorkout()}>Random</button>
        <button onClick={() => startCountdown()}>Begin</button>
        <ol>{workoutList}</ol>
      </Fragment>
    )
  );
};

Landing.propTypes = {
  getWorkout: PropTypes.func.isRequired,
  startCountdown: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { getWorkout, startCountdown })(
  Landing
);
