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
    currentExerciseIndex,
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
     
      {exerciseList[0][name]}
      <h1>{working ? exerciseList[currentExerciseIndex]["name"] : "Rest"}</h1>
      <h3>{resting && exerciseList[currentExerciseIndex + 1]["name"]}</h3>
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
