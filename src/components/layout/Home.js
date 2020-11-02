import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getWorkout } from '../../actions/workout';
import { Header, Workout, Controls } from '../';

import useSound from 'use-sound';

import shortbeep from './shortbeep.mp3';
import longbeep from './longbeep.mp3';

const homeStyle = 'bg-indigo-200 text-indigo-900';
const countdownStyle = 'bg-indigo-200 text-indigo-900';
const workingStyle = 'bg-red-200 text-red-900';
const restingStyle = 'bg-teal-200 text-teal-900';
const pausedStyle = 'bg-cool-gray-200 text-cool-gray-900';
const finishStyle = 'bg-purple-200 text-purple-900';

const Home = ({
  getWorkout,
  workout: {
    currentView,
    working,
    resting,
    paused,
    seconds,
    exerciseList,
    totalRounds,
    difficulty: { level, on, off },
    volume,
  },
}) => {
  const [currentStyle, setCurrentStyle] = useState(homeStyle);
  const [playshort] = useSound(shortbeep);
  const [playlong] = useSound(longbeep);

  useEffect(() => {
    if (volume) {
      if (currentView === 'Countdown' || currentView === 'Workout') {
        if (seconds <= 3 && seconds >= 1) {
          playshort();
        } else if (seconds === 0) {
          playlong();
        }
      }
    }
  }, [seconds]);

  useEffect(() => {
    getWorkout();
  }, [getWorkout]);

  useEffect(() => {
    if (currentView === 'Home') {
      setCurrentStyle(homeStyle);
    } else if (currentView === 'Countdown') {
      setCurrentStyle(countdownStyle);
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
    <div
      className={`min-h-screen flex flex-col justify-between h-full items-center ${currentStyle} px-4 sm:px-6 lg:px-8 transition ease-in-out duration-300`}
    >
      <Header />
      <Workout />
      <Controls />
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
