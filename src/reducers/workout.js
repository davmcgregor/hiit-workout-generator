import { GET_WORKOUT } from '../actions/types';

const initialState = ['run', 'jump', 'swim', 'lift'];

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_WORKOUT:
      return [...state];
    default:
      return state;
  }
}
