import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StartingCountdown = ({ workout: { current } }) => {
  return current === 'StartingCountdown' && <Fragment>hi</Fragment>;
};

StartingCountdown.PropTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(StartingCountdown);
