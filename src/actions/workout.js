import { GET_WORKOUT } from './types';
import AllExercises from '../data/AllExercises.js';
import random from '../utils/random.js';

export const getWorkout = () => (dispatch) => {
  
  const randomExercises = random(AllExercises)

  dispatch({
    type: GET_WORKOUT,
    payload: randomExercises,
  });
};
