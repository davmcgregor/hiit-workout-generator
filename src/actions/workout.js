import { GET_WORKOUT } from './types';

export const getWorkout = () => (dispatch) => {
  dispatch({
    type: GET_WORKOUT,
  });
};
