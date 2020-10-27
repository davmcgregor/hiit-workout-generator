import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Countdown = ({ workout: { seconds } }) => {
  return <Fragment>Begin in: {seconds}</Fragment>;
};

Countdown.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Countdown);
