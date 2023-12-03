import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { HomeButtons, WorkoutButtons, FinishButtons } from '../';

import PropTypes from 'prop-types';

const Controls = ({ workout: { currentView } }) => {
  return (
    <div
      className={`flex justify-center items-center w-screen ${
        currentView === 'Home' ? 'mt-auto mb-12' : 'mb-auto'
      } px-8 md:px-8`}
    >
      {currentView === 'Home' && <HomeButtons />}
      {currentView === 'Workout' && <WorkoutButtons />}
      {currentView === 'Finish' && <FinishButtons />}
    </div>
  );
};

Controls.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Controls);
