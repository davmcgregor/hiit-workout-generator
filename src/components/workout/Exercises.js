import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';

const Exercises = ({ workout: { exerciseList } }) => {
  return (
    <Fragment>
      <ol>
        {exerciseList.map((exercise, index) => (
          <li key={index}>{exercise.name}</li>
        ))}
      </ol>
    </Fragment>
  );
};

Exercises.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(Exercises);
