import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Landing,
  StartingCountdown,
  CurrentWorkout,
  WorkoutComplete,
} from '../index';

const Routes = ({ workout: { currentComponent } }) => {
  return (
    <Fragment>
      {currentComponent === 'Landing' && <Landing />}
      {currentComponent === 'StartingCountdown' && <StartingCountdown />}
      {currentComponent === 'CurrentWorkout' && <CurrentWorkout />}
      {currentComponent === 'Finish' && <WorkoutComplete />}
    </Fragment>
  );
};

Routes.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Routes);
