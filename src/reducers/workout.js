import { GET_WORKOUT } from '../actions/types';

const initialState = { exercises: [], current: null };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WORKOUT:
      return { ...state, exercises: payload.randomExercises, rounds: payload.randomRounds,current: null };
    default:
      return state;
  }
}
