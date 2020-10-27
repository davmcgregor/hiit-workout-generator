import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorkout, startCountdown } from '../../actions/workout';

import PropTypes from 'prop-types';

const Landing = ({
  getWorkout,
  workout: {
    exercises,
    currentExerciseIndex,
    totalRounds,
    difficulty: { level, on, off },
  },
}) => {
  useEffect(() => {
    getWorkout();
  }, [getWorkout]);

  const workoutList = exercises.map((exercise, index) => (
    <li key={index}>{exercise.name}</li>
  ));

  return (
    <Fragment>
      <h1>
        {totalRounds} Rounds of {exercises.length} Exercises ={' '}
        {totalRounds * exercises.length} Minutes
      </h1>
      <h2>
        Difficulty Level: {level} - {on} Second On // {off} Seconds Off
      </h2>
      <button onClick={() => getWorkout()}>Random</button>
      <button onClick={() => startCountdown()}>Begin</button>
      <ol>{workoutList}</ol>
    </Fragment>
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
