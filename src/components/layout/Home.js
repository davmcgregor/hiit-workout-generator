import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getWorkout } from '../../actions/workout';
import { Controls } from '../';

import PropTypes from 'prop-types';

const homeStyle = 'bg-indigo-200 text-indigo-900';
const workingStyle = 'bg-green-200 text-green-900';
const restingStyle = 'bg-blue-200 text-blue-900';
const pausedStyle = 'bg-orange-200 text-orange-900';
const finishStyle = 'bg-cool-gray-200 cool-gray-900';

const Home = ({
  getWorkout,
  workout: {
    currentView,
    working,
    resting,
    paused,
    exerciseList,
    totalRounds,
    difficulty: { level, on, off },
  },
}) => {
  const [currentStyle, setCurrentStyle] = useState(homeStyle);

  useEffect(() => {
    getWorkout();
  }, [getWorkout]);

  useEffect(() => {
    if (currentView === 'Home') {
      setCurrentStyle(homeStyle);
    } else if (currentView === 'Workout') {
      if (working) {
        setCurrentStyle(workingStyle);
      } else if (resting) {
        setCurrentStyle(restingStyle);
      }
      if (paused) {
        setCurrentStyle(pausedStyle);
      }
    } else if (currentView === 'Finish') {
      setCurrentStyle(finishStyle);
    }
  }, [currentView, working, resting, paused]);

  return (
    <div className={`${currentStyle} relative h-screen w-full`}>
      <h1 className='absolute top-0 inset-x-0 text-center mx-auto font-extrabold text-3xl italic mt-8'>
        Hiit Workout Generator
      </h1>
      {currentView === 'Home' && (
        <div className='mt-3 mr-3 font-bold underline absolute top-0 right-0'>
          <Link to='/about'>About</Link>
        </div>
      )}
      <div className='flex flex-col justify-around items-center h-full pt-10'>
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
