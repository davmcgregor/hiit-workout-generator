import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getWorkout, startCountdown } from '../../actions/workout';

import PropTypes from 'prop-types';

const Landing = ({
  startCountdown,
  getWorkout,
  workout: {
    exerciseList,
    totalRounds,
    difficulty: { level, on, off },
  },
}) => {
  useEffect(() => {
    getWorkout();
  }, [getWorkout]);

  return (
    <Fragment>
      <h1>
        {totalRounds} Rounds of {exerciseList.length} Exercises ={' '}
        {totalRounds * exerciseList.length} Minutes
      </h1>
      <h2>
        Difficulty Level: {level} - {on} Second On // {off} Seconds Off
      </h2>
      <button onClick={() => startCountdown()}>Begin</button>
      <button onClick={() => getWorkout()}>Random</button>
      <ol>
        {exerciseList.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ol>
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
