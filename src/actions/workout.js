import { GET_WORKOUT, START_COUNTDOWN } from './types';
import generateWorkout from '../utils/generateWorkout';

export const getWorkout = () => (dispatch) => {
  const randomWorkout = generateWorkout();

  dispatch({
    type: GET_WORKOUT,
    payload: randomWorkout,
  });
};

export const startCountdown = () => (dispatch) => {
  dispatch({
    type: START_COUNTDOWN,
  });
};
