import {
  GET_WORKOUT,
  COUNTDOWN_STARTED,
  TIMER_STARTED,
  TIMER_TICK,
  TIMER_PAUSED,
  TIMER_RESUMED,
  EXERCISE_STARTED,
  REST_STARTED,
  WORKOUT_STARTED,
  WORKOUT_COMPLETED,
} from '../actions/types';

const initialState = {
  currentComponent: 'Landing',
  seconds: 0,
  working: false,
  resting: false,
  paused: false,
  completed: false,
  countdown: false,
  totalRounds: 0,
  currentRound: 0,
  currentExercise: 0,
  exerciseList: [],
  difficulty: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WORKOUT:
      return {
        ...state,
        currentComponent: 'Landing',
        totalRounds: payload.randomRounds,
        difficulty: payload.randomDifficulty,
        exerciseList: payload.randomExercises,
      };

    case COUNTDOWN_STARTED:
      return {
        ...state,
        currentComponent: 'Countdown',
        countdown: true,
      };

    ////////
    ////////
    ////////

    case TIMER_STARTED:
      return {
        ...state,
        seconds: payload.seconds,
      };
    case TIMER_TICK:
      return {
        ...state,
        seconds: state.seconds - 1,
      };
    case TIMER_PAUSED:
      return {
        ...state,
        paused: true,
      };
    case TIMER_RESUMED:
      return {
        ...state,
        paused: false,
      };
    case EXERCISE_STARTED:
      return {
        ...state,
        resting: false,
        working: true,
        currentExercise:
          state.currentExercise === state.exerciseList.length
            ? 1
            : state.currentExercise + 1,
        currentRound:
          state.currentExercise === state.exerciseList.length
            ? state.currentRound + 1
            : state.currentRound,
      };
    case REST_STARTED:
      return {
        ...state,
        resting: true,
        working: false,
      };
    case WORKOUT_STARTED:
      return {
        ...state,
        currentComponent: 'Workout',
        countdown: false,
        currentRound: 1,
      };
    case WORKOUT_COMPLETED:
      return {
        ...state,
        working: false,
        resting: false,
        completed: true,
      };
    default:
      return state;
  }
}
