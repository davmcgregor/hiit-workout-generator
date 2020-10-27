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
  WORKOUT_STARTED,
  WORKOUT_COMPLETED,
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

  if (workout.paused || workout.complete) {
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
    if (workout.resting) {
      dispatch(startExercise());
    } else if (workout.working) {
      dispatch(startRest());
    } else if (workout.countdown) {
      dispatch(startWorkout());
    } else {
      dispatch(startCountdown());
    }
  }
};

export const startCountdown = () => (dispatch) => {
  dispatch({
    type: COUNTDOWN_STARTED,
  });

  dispatch(startTimer({ seconds: 3 }));
};

export const startExercise = () => (dispatch, getState) => {
  const { workout } = getState();
  dispatch({
    type: EXERCISE_STARTED,
  });
  dispatch(startTimer({ seconds: workout.difficulty.work }));
};

export const startRest = () => (dispatch, getState) => {
  const { workout } = getState();
  dispatch({
    type: REST_STARTED,
  });
  dispatch(startTimer({ seconds: workout.difficulty.rest }));
};

export const startWorkout = () => (dispatch) => {
  dispatch({
    type: WORKOUT_STARTED,
  });
  dispatch(startExercise());
};
