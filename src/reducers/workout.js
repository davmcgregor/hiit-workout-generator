import { GET_WORKOUT, START_COUNTDOWN, END_COUNTDOWN } from '../actions/types';

const initialState = { exercises: [], current: 'Landing' };

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WORKOUT:
      return {
        ...state,
        exercises: payload.randomExercises,
        rounds: payload.randomRounds,
        difficulty: payload.randomDifficulty,
        current: 'Landing',
      };
    case START_COUNTDOWN:
      return {
        ...state,
        current: 'StartingCountdown',
      };
    case END_COUNTDOWN:
      return {
        ...state,
        current: 'Landing',
      };
    default:
      return state;
  }
}
