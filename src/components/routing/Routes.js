import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Landing, Countdown, Workout } from '../index';
// import { Landing, Countdown, Workout, Complete } from '../index';

const Routes = ({ workout: { currentComponent } }) => {
  return (
    <Fragment>
      {currentComponent === 'Landing' && <Landing />}
      {currentComponent === 'Countdown' && <Countdown />}
      {currentComponent === 'Workout' && <Workout />}
      {/* {currentComponent === 'Finish' && <Complete />} */}
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
