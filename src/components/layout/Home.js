import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWorkout, startCountdown } from '../../actions/workout';

import PropTypes from 'prop-types';

const Home = ({
  startCountdown,
  getWorkout,
  workout: {
    currentView,
    exerciseList,
    totalRounds,
    difficulty: { level, on, off },
  },
}) => {
  useEffect(() => {
    getWorkout();
  }, [getWorkout]);

  return (
    <div className='bg-blue-200 text-blue-900 h-screen w-full'>
      {currentView === 'Home' && (
        <div class='mt-2 mr-3 text-lg font-bold underline absolute top-0 right-0'>
          <Link to='/about'>About</Link>
        </div>
      )}
      <div class='flex flex-col justify-between items-center h-full'>
        <h1 class=' font-extrabold text-3xl italic mt-6'>
          Hiit Workout Generator
        </h1>

        <h1>
          {totalRounds} Rounds of {exerciseList.length} Exercises ={' '}
          {totalRounds * exerciseList.length} Minutes
        </h1>
        <h2>
          Difficulty Level: {level} - {on} Second On // {off} Seconds Off
        </h2>

        <ol>
          {exerciseList.map((exercise, index) => (
            <li key={index}>{exercise.name}</li>
          ))}
        </ol>
        <button onClick={() => startCountdown()}>Begin</button>
        <button onClick={() => getWorkout()}>Random</button>
      </div>
    </div>
  );
};

Home.propTypes = {
  getWorkout: PropTypes.func.isRequired,
  startCountdown: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { getWorkout, startCountdown })(Home);
