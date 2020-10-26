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
    currentExercise: { name, interval, category, bodyweight },
    currentExerciseIndex,
    currentRoundIndex,
  },
}) => {
  const [counter, setCounter] = useState(null);
  const [startCountdown, setStartCountdown] = useState(false);

  // change action
  const changeAction = () => {
    if (currentRoundIndex > rounds - 1) {
      finishWorkout();
      setCounter(null);
    }

    if (
      (currentRoundIndex === rounds - 1) &
      (currentExerciseIndex === fullWorkout.length - 1)
    ) {
      finishWorkout();
      setCounter(null);
    }

    currentExerciseIndex === fullWorkout.length - 1
      ? changeRound()
      : changeExercise();
  };

  // set counter
  useEffect(() => {
    setCounter(interval);
    setStartCountdown(true);
  }, [interval]);

  // change counter
  useEffect(() => {
    if (startCountdown) {
      const timer =
        counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

      if (counter === 0) {
        setStartCountdown(false)
        changeAction();
        console.log('hi');
        return () => {
          clearInterval(timer);
        };
      }

      return () => {
        clearInterval(timer);
      };
    }
  }, [counter, startCountdown]);

  console.log(counter);

  return (
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
