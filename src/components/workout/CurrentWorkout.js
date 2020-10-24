import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeExercise, changeRound } from '../../actions/workout';

const CurrentWorkout = ({
  changeExercise,
  changeRound,
  workout: {
    rounds,
    currentComponent,
    currentExercise: { name, interval },
    currentExerciseIndex,
    currentRoundIndex,
    workoutInProgress,
  },
}) => {
  const [counter, setCounter] = useState(0);

  // change logic
  useEffect(() => {
    const exerciseChanger =
      workoutInProgress && setInterval(() => changeExercise(), interval * 1000);
    return () => clearInterval(exerciseChanger);
  }, [currentComponent, changeExercise, interval]);

  // set counter
  useEffect(() => {
    setCounter(interval);
  }, [workoutInProgress, interval]);

  // counter
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [currentExerciseIndex, counter]);

  return (
    currentComponent === 'CurrentWorkout' && (
      <Fragment>
        <h2>Counter: {counter}</h2>
        <h3>
          Round {currentRoundIndex + 1} of {rounds}
        </h3>
        <h1>
          {currentExerciseIndex + 1} {name}
        </h1>
        <button onClick={() => changeExercise()}>Increment Exercise</button>
        <button onClick={() => changeRound()}>Increment Round</button>
      </Fragment>
    )
  );
};

CurrentWorkout.propTypes = {
  workout: PropTypes.object.isRequired,
  changeExercise: PropTypes.func.isRequired,
  changeRound: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { changeExercise, changeRound })(
  CurrentWorkout
);
