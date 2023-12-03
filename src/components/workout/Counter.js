import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Counter = ({ workout: { seconds } }) => {
  return <h1 className={`countertext font-semibold`}>{seconds}</h1>;
};

Counter.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Counter);
