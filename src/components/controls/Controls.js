import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { HomeButtons, WorkoutButtons, FinishButtons } from '../';

import PropTypes from 'prop-types';

const Controls = ({ workout: { currentView } }) => {
  return (
    <Fragment>
      {currentView === 'Home' && <HomeButtons />}
      {currentView === 'Workout' && <WorkoutButtons />}
      {currentView === 'Finish' && <FinishButtons />}
    </Fragment>
  );
};

Controls.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Controls);
