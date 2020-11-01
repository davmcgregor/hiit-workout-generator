import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Status = ({ workout: { currentView, working, resting, paused } }) => {
  const [currentStatus, setCurrentStatus] = useState('Work');

  const workingStatus = 'Work';
  const restingStatus = 'Rest';
  const pausedStatus = 'Paused';
  const finishStatus = 'Workout complete!';

  useEffect(() => {
    if (currentView === 'Home') {
      setCurrentStatus(homeStatus);
    } else if (currentView === 'Workout') {
      if (working) {
        setCurrentStatus(workingStatus);
      } else if (resting) {
        setCurrentStatus(restingStatus);
      }
      if (paused) {
        setCurrentStatus(pausedStatus);
      }
    } else if (currentView === 'Finish') {
      setCurrentStatus(finishStatus);
    }
  }, [currentView, working, resting, paused]);

  return (
    currentView !== 'Countdown' && (
      <Fragment>
        <h1 className='font-extrabold uppercase text-4xl italic'>
          {currentStatus}
          {/* {paused ? (
            working ? (
              <span className='font-bold capitalize'>
                {' '}
                {'('}Working{')'}
              </span>
            ) : (
              <span className='font-bold capitalize'>
                {' '}
                {'('}Resting{')'}
              </span>
            )
          ) : null} */}
        </h1>
      </Fragment>
    )
  );
};

Status.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Status);
