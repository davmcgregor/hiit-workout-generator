import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getWorkout, startCountdown } from '../../actions/workout';

const Complete = ({
  getWorkout,
  startCountdown,
  workout: { currentComponent },
}) => {
  return (
    <Fragment>
      <h1>Fin!</h1>
      <button onClick={() => getWorkout()}>Try a new workout</button>
      <button onClick={() => startCountdown()}>Do this workout again?</button>
    </Fragment>
  );
};

Complete.propTypes = {
  startCountdown: PropTypes.func.isRequired,
  getWorkout: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { startCountdown, getWorkout })(
  Complete
);
