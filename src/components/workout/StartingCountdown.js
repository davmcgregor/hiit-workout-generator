import React, { Fragment, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const StartingCountdown = ({ workout: { currentComponent } }) => {
  const [counter, setCounter] = useState(10);

  useEffect(() => {
    setCounter(3);
  }, [currentComponent]);

  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    return () => clearInterval(timer);
  }, [currentComponent, counter]);

  return (
    currentComponent === 'StartingCountdown' && (
      <Fragment>Begin in: {counter}</Fragment>
    )
  );
};

StartingCountdown.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(StartingCountdown);
