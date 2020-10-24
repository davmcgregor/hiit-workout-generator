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
  const [exercise, setExercise] = useState(0);
  const [round, setRound] = useState(0);

  useEffect(() => {
    setExercise(currentExerciseIndex);
    setRound(currentRoundIndex);
  }, [workoutInProgress]);

  return (
    currentComponent === 'CurrentWorkout' && (
      <Fragment>
        <h2>
          Round {currentRoundIndex + 1} of {rounds}
        </h2>
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
