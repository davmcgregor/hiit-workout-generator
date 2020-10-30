import React from 'react';
import { connect } from 'react-redux';
import { getWorkout, startCountdown } from '../../actions/workout';

import PropTypes from 'prop-types';

const buttonStyles =
  'w-64 uppercase tracking-wider text-white bg-blue-800 hover:bg-blue-700 focus:outline-none focus:border-blue-900 focus:shadow-outline-blue active:bg-blue-900 transition ease-in-out duration-150 text-2xl py-5 px-16 rounded-lg mx-4 mb-8';

const Controls = ({ startCountdown, getWorkout, workout: { currentView } }) => {
  return (
    <div>
      <span class='inline-flex rounded-md'>
        <button
          type='button'
          onClick={() => startCountdown()}
          class={buttonStyles}
        >
          Begin
        </button>
      </span>
      <span class='inline-flex rounded-md'>
        <button type='button' onClick={() => getWorkout()} class={buttonStyles}>
          Random
        </button>
      </span>
    </div>
  );
};

Controls.propTypes = {
  getWorkout: PropTypes.func.isRequired,
  startCountdown: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { getWorkout, startCountdown })(
  Controls
);
