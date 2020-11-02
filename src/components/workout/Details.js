import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Details = ({
  workout: {
    currentView,
    totalRounds,
    currentRound,
    currentExercise,
    difficulty: { level, work, rest },
    exerciseList,
    resting,
    working,
  },
}) => {
  const homeDetails = (
    <div className='text-center mb-2 md:mb-10'>
      <h1 className='text-3xl md:text-5xl font-semibold'>
        {totalRounds} Rounds {'('}
        {totalRounds * exerciseList.length} Minutes Total{')'}
      </h1>
      <h1 className='text-2xl md:text-3xl font-semibold'>
        {work} seconds work // {rest} seconds rest {'('}
        {level}
        {')'}
      </h1>
    </div>
  );

  const workoutDetails = (
    <div className='text-center'>
      <h1 className='text-3xl font-semibold'>
        Round {currentRound}/{totalRounds}
      </h1>
      {working && (
        <h1 className='text-3xl md:text-5xl'>
          {currentExercise} {exerciseList[currentExercise - 1]['name']}
        </h1>
      )}
      {resting && (
        <h1 className='text-3xl md:text-5xl italic'>
          Next:{' '}
          {
            exerciseList[
              currentExercise === exerciseList.length ? 0 : currentExercise
            ]['name']
          }
        </h1>
      )}
    </div>
  );

  return (
    <Fragment>
      {currentView === 'Countdown' || currentView === 'Finish'
        ? null
        : currentView === 'Home'
        ? homeDetails
        : workoutDetails}
    </Fragment>
  );
};

Details.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Details);
