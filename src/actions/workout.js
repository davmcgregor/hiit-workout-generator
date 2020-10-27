import {
  GET_WORKOUT,
  COUNTDOWN_STARTED,
  COUNTDOWN_COMPLETED,
  TIMER_STARTED,
  TIMER_TICK,
  TIMER_PAUSED,
  TIMER_RESET,
  EXERCISE_STARTED,
  REST_STARTED,
  SET_STARTED,
  SET_COMPLETED,
} from './types';

import generateWorkout from '../utils/generateWorkout';

let timer = null;

export const getWorkout = () => (dispatch) => {
  const randomWorkout = generateWorkout();
  dispatch({
    type: GET_WORKOUT,
    payload: randomWorkout,
  });
};

export const startTimer = ({ seconds }) => (dispatch) => {
  clearInterval(timer);

  timer = setInterval(() => {
    dispatch(tick());
  }, 1000);

  dispatch({
    type: TIMER_STARTED,
    payload: { seconds },
  });
};

export const tick = () => (dispatch, getState) => {
  const { workout } = getState();

  if (workout.paused || (!workout.active && !workout.countdown)) {
    return;
  }

  if (workout.totalRounds === workout.currentRound) {
    dispatch({
      type: WORKOUT_COMPLETED,
    });
    clearInterval(timer);

    return;
  }

  if (workout.seconds !== 0) {
    dispatch({
      type: TIMER_TICK,
    });
  } else {
    if (timer.resting) {
      dispatch(startWork());
    } else if (timer.working) {
      dispatch(startRest());
    } else {
      dispatch(startCountdown());
    }
  }
};

export const startCountdown = () => (dispatch) => {
  dispatch({
    type: COUNTDOWN_STARTED,
  });

  dispatch(startTimer({ seconds: 4 }));
};
