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

///

export const startCountdown = () => (dispatch) => {
  clearInterval(timer);
  timer = setInterval(() => {
    dispatch(tick());
  }, 1000);
  dispatch(timerStarted({ seconds }));

  dispatch({
    type: COUNTDOWN_STARTED,
    payload: 4,
  });
};

//

export const tick = () => (dispatch) => {
  return (dispatch, getState) => {
    const { timer } = getState();

    if (timer.paused || !timer.active) {
      return;
    }

    if (setComplete(timer)) {
      dispatch(completeSet());
      return;
    }

    if (!timerComplete(timer)) {
      dispatch(timerTick());
    } else {
      if (timer.resting) {
        dispatch(startWork());
      } else {
        dispatch(startRest());
      }
    }
  };
};
