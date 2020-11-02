import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PercentageComplete = ({
  workout: { completed, exerciseList, exerciseCount, totalRounds },
}) => {
  const PercentageComplete = Math.round(
    (exerciseCount / (exerciseList.length * totalRounds)) * 100
  );
  return (
    <div className='w-24 text-right'>
      <dl>
        <dd className='text-4xl leading-7 font-semibold'>
          {completed ? '100' : PercentageComplete}%
        </dd>
        <dt className='text-base font-medium text-gray-900 truncate'>
          Complete
        </dt>
      </dl>
    </div>
  );
};

PercentageComplete.propTypes = {
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps)(PercentageComplete);
