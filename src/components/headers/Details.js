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
    <Fragment>
      <h1 className='text-4xl'>
        {totalRounds} Rounds {'('}
        {totalRounds * exerciseList.length} Minutes Total{')'}
      </h1>
      <h1 className='text-4xl'>
        {work} seconds work // {rest} seconds rest {'('}
        {level}
        {')'}
      </h1>
    </Fragment>
  );

  const workoutDetails = (
    <Fragment>
      <h1 className='text-4xl'>
        Round {currentRound} of {totalRounds}
      </h1>
      {working && (
        <h1 className='text-4xl'>
          {exerciseList[currentExercise - 1]['name']}
        </h1>
      )}
      {resting && (
        <h1 className='text-4xl'>
          Up Next:{' '}
          {
            exerciseList[
              currentExercise === exerciseList.length ? 0 : currentExercise
            ]['name']
          }
        </h1>
      )}
    </Fragment>
  );

  return (
    <div className='text-center'>
      {currentView === 'Countdown' || currentView === 'Finish'
        ? null
        : currentView === 'Home'
        ? homeDetails
        : workoutDetails}
    </div>
  );
};

Details.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Details);
