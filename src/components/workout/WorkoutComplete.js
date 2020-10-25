import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkout, startCountdown } from '../../actions/workout';

const WorkoutComplete = ({
  getWorkout,
  startCountdown,
  workout: { currentComponent },
}) => {
  return (
    currentComponent === 'Finish' && (
      <Fragment>
        <h1>Fin</h1>
        <button onClick={() => startCountdown()}>Do this workout again?</button>
        <button onClick={() => getWorkout()}>Try a new workout</button>
      </Fragment>
    )
  );
};

WorkoutComplete.propTypes = {
  startCountdown: PropTypes.func.isRequired,
  getWorkout: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { startCountdown, getWorkout })(
  WorkoutComplete
);
