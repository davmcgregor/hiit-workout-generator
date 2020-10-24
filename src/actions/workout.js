import { GET_WORKOUT, START_COUNTDOWN, END_COUNTDOWN } from './types';
import generateWorkout from '../utils/generateWorkout';

export const getWorkout = () => (dispatch) => {
  const randomWorkout = generateWorkout();

  dispatch({
    type: GET_WORKOUT,
    payload: randomWorkout,
  });
};

export const startCountdown = (timeout = 11000) => (dispatch) => {
  dispatch({
    type: START_COUNTDOWN,
  });

  setTimeout(() => dispatch({ type: END_COUNTDOWN }), timeout);
};
