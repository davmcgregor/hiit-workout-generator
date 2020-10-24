import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StartingCountdown = ({ workout: { current } }) => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    setCounter(10);
  }, [current]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [current, counter]);

  return (
    current === 'StartingCountdown' && <Fragment>Begin in: {counter}</Fragment>
  );
};

StartingCountdown.PropTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(StartingCountdown);
