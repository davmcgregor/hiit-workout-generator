import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeExercise, changeRound } from '../../actions/workout';

const CurrentWorkout = ({
  changeExercise,
  changeRound,
  workout: {
    exercises,
    rounds,
    difficulty: { level, on, off },
    currentComponent,
    currentExerciseIndex,
    currentRoundIndex,
    workoutInProgress,
  },
}) => {
  const [counter, setCounter] = useState(0);

  // change logic
  useEffect(() => {
    workoutInProgress && setInterval(() => changeExercise(), on * 1000);
  }, [currentComponent]);

  // set counter
  useEffect(() => {
    setCounter(on);
  }, [workoutInProgress, currentExerciseIndex]);

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
          Exercise {currentExerciseIndex + 1}:{' '}
          {exercises[currentExerciseIndex]['name']}
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
