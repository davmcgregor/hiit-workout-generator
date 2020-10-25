import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  changeExercise,
  changeRound,
  finishWorkout,
} from '../../actions/workout';

const CurrentWorkout = ({
  changeExercise,
  changeRound,
  finishWorkout,
  workout: {
    rounds,
    fullWorkout,
    currentComponent,
    currentExercise: { name, interval, category, bodyweight },
    currentExerciseIndex,
    currentRoundIndex,
    workoutInProgress,
  },
}) => {
  const [counter, setCounter] = useState(0);

  // change logic
  useEffect(() => {
    const changeAction = () => {
      if (
        (currentRoundIndex === rounds - 1) &
        (currentExerciseIndex === fullWorkout.length - 1)
      ) {
        finishWorkout();
      } else {
        currentExerciseIndex === fullWorkout.length - 1
          ? changeRound()
          : changeExercise();
      }
    };

    if (currentRoundIndex > rounds - 1) {
      finishWorkout();
    }

    const exerciseChanger =
      workoutInProgress &&
      setInterval(() => {
        changeAction();
      }, interval * 1000);
    return () => clearInterval(exerciseChanger);
  }, [
    currentComponent,
    changeExercise,
    changeRound,
    interval,
    currentExerciseIndex,
    currentRoundIndex,
  ]);

  // set counter
  useEffect(() => {
    setCounter(interval);
  }, [workoutInProgress, interval]);

  // change counter
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [workoutInProgress, currentExerciseIndex, counter]);

  return (
    currentComponent === 'CurrentWorkout' && (
      <Fragment>
        <h2>Counter: {counter}</h2>
        <h3>
          Round {currentRoundIndex + 1} of {rounds}
        </h3>
        <h1>
          {name} {category === 'Rest' ? null : bodyweight && '(Bodyweight)'}
        </h1>
        {(category === 'Rest') &
        (currentExerciseIndex + 1 < fullWorkout.length) ? (
          <h3>Up Next: {fullWorkout[currentExerciseIndex + 1]['name']}</h3>
        ) : null}

        {(category === 'Rest') &
        (currentExerciseIndex === fullWorkout.length - 1) ? (
          <h3>Up Next: {fullWorkout[0]['name']}</h3>
        ) : null}

        <button
          onClick={() => {
            currentExerciseIndex === fullWorkout.length - 1
              ? changeRound()
              : changeExercise();
          }}
        >
          Increment Exercise
        </button>
        <button onClick={() => changeRound()}>Increment Round</button>
      </Fragment>
    )
  );
};

CurrentWorkout.propTypes = {
  workout: PropTypes.object.isRequired,
  changeExercise: PropTypes.func.isRequired,
  changeRound: PropTypes.func.isRequired,
  finishWorkout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, {
  changeExercise,
  changeRound,
  finishWorkout,
})(CurrentWorkout);
