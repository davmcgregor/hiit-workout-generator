import { GET_WORKOUT } from './types';
import AllExercises from '../data/AllExercises.js';
import generateWorkout from '../utils/generateWorkout';

export const getWorkout = () => (dispatch) => {
 
  const randomWorkout = generateWorkout()

  dispatch({
    type: GET_WORKOUT,
    payload: randomWorkout
  });
};
