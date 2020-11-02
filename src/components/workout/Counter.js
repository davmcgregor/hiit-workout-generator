import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Counter = ({ workout: { seconds } }) => {
  return (
    <h1 className={`font-semibold`} style={{ fontSize: '20rem' }}>
      {seconds}
    </h1>
  );
};

Counter.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Counter);
