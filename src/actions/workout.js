import {
  GET_WORKOUT,
  START_COUNTDOWN,
  END_COUNTDOWN,
  CHANGE_EXERCISE,
  CHANGE_ROUND,
  FINISH_WORKOUT
} from './types';
import generateWorkout from '../utils/generateWorkout';

export const getWorkout = () => (dispatch) => {
  const randomWorkout = generateWorkout();

  dispatch({
    type: GET_WORKOUT,
    payload: randomWorkout,
  });
};

export const startCountdown = (timeout = 4000) => (dispatch) => {
  dispatch({
    type: START_COUNTDOWN,
  });

  setTimeout(() => dispatch({ type: END_COUNTDOWN }), timeout);
};

export const changeExercise = () => (dispatch) => {
  dispatch({
    type: CHANGE_EXERCISE,
  });
};

export const changeRound = () => (dispatch) => {
  dispatch({
    type: CHANGE_ROUND,
  });
};

export const finishWorkout = () => (dispatch) => {
  dispatch({
    type: FINISH_WORKOUT,
  });
};