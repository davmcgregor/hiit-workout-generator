import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { changeExercise, finishWorkout } from '../../actions/workout';

const CurrentWorkout = ({
  changeExercise,
  finishWorkout,
  workout: {
    rounds,
    fullWorkout,
    currentExercise: { name, interval, category, bodyweight },
    currentExerciseIndex,
    currentRoundIndex,
    lastExerciseOfWorkout,
  },
}) => {
  const [counter, setCounter] = useState(null);

  // set counter
  useEffect(() => {
    setCounter(interval);
  }, [interval]);

  // change counter
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);

    if (counter === 0) {
      lastExerciseOfWorkout ? finishWorkout() : changeExercise();
      return () => {
        clearInterval(timer);
      };
    }

    return () => {
      clearInterval(timer);
    };
  }, [counter]);

  console.log(counter);

  return (
    <Fragment>
      <h2>Counter: {counter}</h2>
      <h3>
        Round {currentRoundIndex + 1} of {rounds}
      </h3>
      <button
        onClick={() => {
          lastExerciseOfWorkout ? finishWorkout() : changeExercise();
        }}
      >
        Next Exercise
      </button>
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
    </Fragment>
  );
};

CurrentWorkout.propTypes = {
  workout: PropTypes.object.isRequired,
  changeExercise: PropTypes.func.isRequired,
  finishWorkout: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, {
  changeExercise,
  finishWorkout,
})(CurrentWorkout);
