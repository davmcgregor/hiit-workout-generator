import React, { Fragment, useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Workout = ({
  workout: {
    seconds,
    working,
    resting,
    paused,
    completed,
    totalRounds,
    currentRound,
    currentExercise,
    exerciseList,
    difficulty,
  },
}) => {
  return (
    <Fragment>
      <h2>Counter: {seconds}</h2>
      <h3>
        Round {currentRound} / {totalRounds}
      </h3>

      <h1>
        {working && currentExercise}{' '}
        {working ? (
          exerciseList[currentExercise - 1]['name']
        ) : (
          <span>Rest</span>
        )}
      </h1>
      <h4>
        {resting &&
          exerciseList[currentExercise === 3 ? 0 : currentExercise]['name']}
      </h4>
      <button>Pause/Resume</button>
      <button>Skip</button>
    </Fragment>
  );
};

Workout.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Workout);
