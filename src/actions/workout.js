import {
  GET_WORKOUT,
  COUNTDOWN_STARTED,
  TIMER_STARTED,
  TIMER_TICK,
  TIMER_PAUSED,
  TIMER_RESUMED,
  TIMER_SKIP,
  EXERCISE_STARTED,
  REST_STARTED,
  WORKOUT_STARTED,
  WORKOUT_COMPLETED,
  NEXT_EXERCISE,
  NEXT_REST,
  TOGGLE_VOLUME,
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

  if (workout.seconds !== 0) {
    dispatch({
      type: TIMER_TICK,
    });
  } else {
    if (workout.resting) {
      dispatch(startExercise());
    } else if (workout.working) {
      if (
        (workout.totalRounds === workout.currentRound &&
          workout.currentExercise === workout.exerciseList.length) ||
        workout.currentRound > workout.totalRounds
      ) {
        dispatch({
          type: WORKOUT_COMPLETED,
        });
        clearInterval(timer);

        return;
      } else {
        dispatch(startRest());
      }
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

export const skipTimer = () => (dispatch, getState) => {
  const { workout } = getState();

  if (workout.paused) {
    if (workout.resting) {
      dispatch({
        type: NEXT_EXERCISE,
        payload: workout.difficulty.work,
      });
    } else if (workout.working) {
      dispatch({
        type: NEXT_REST,
        payload: workout.difficulty.rest,
      });
    }
    if (
      (workout.totalRounds === workout.currentRound &&
        workout.currentExercise === workout.exerciseList.length) ||
      workout.currentRound > workout.totalRounds
    ) {
      dispatch({
        type: WORKOUT_COMPLETED,
      });
      clearInterval(timer);

      return;
    }
  } else {
    dispatch({
      type: TIMER_SKIP,
    });
    clearInterval(timer);
    if (workout.seconds > 3) {
      dispatch(startTimer({ seconds: 3 }));
    } else {
      if (workout.resting) {
        dispatch(startExercise());
      } else if (workout.working) {
        dispatch(startRest());
      }

      if (
        (workout.totalRounds === workout.currentRound &&
          workout.currentExercise === workout.exerciseList.length) ||
        workout.currentRound > workout.totalRounds
      ) {
        dispatch({
          type: WORKOUT_COMPLETED,
        });
        clearInterval(timer);

        return;
      }
    }
  }
};

export const pause = () => (dispatch) => {
  dispatch({
    type: TIMER_PAUSED,
  });
};

export const resume = () => (dispatch) => {
  dispatch({
    type: TIMER_RESUMED,
  });
};

export const togglePause = () => (dispatch, getState) => {
  const { workout } = getState();
  if (workout.paused) {
    dispatch({
      type: TIMER_RESUMED,
    });
  } else {
    dispatch({
      type: TIMER_PAUSED,
    });
  }
};

export const toggleVolume = () => (dispatch) => {
  dispatch({
    type: TOGGLE_VOLUME,
  });
};
