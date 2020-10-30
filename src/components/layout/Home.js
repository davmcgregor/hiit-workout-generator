import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWorkout } from '../../actions/workout';
import { Controls } from '../';

import PropTypes from 'prop-types';

const Home = ({
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
    <div className='relative bg-blue-200 text-blue-900 h-screen w-full'>
      <h1 class='absolute top-0 inset-x-0 text-center mx-auto font-extrabold text-3xl italic mt-8'>
        Hiit Workout Generator
      </h1>
      {currentView === 'Home' && (
        <div class='mt-3 mr-3 font-bold underline absolute top-0 right-0'>
          <Link to='/about'>About</Link>
        </div>
      )}
      <div class='flex flex-col justify-around items-center h-full pt-10'>
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
        <Controls />
      </div>
    </div>
  );
};

Home.propTypes = {
  getWorkout: PropTypes.func.isRequired,
  workout: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  workout: state.workout,
});

export default connect(mapStateToProps, { getWorkout })(Home);
