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
  TIMER_SKIP,
  NEXT_EXERCISE,
  NEXT_REST,
  TOGGLE_VOLUME,
} from '../actions/types';

const initialState = {
  currentView: 'Home',
  seconds: 0,
  working: false,
  resting: false,
  paused: false,
  completed: false,
  countdown: false,
  totalRounds: 0,
  currentRound: 0,
  currentExercise: 0,
  exerciseCount: 0,
  exerciseList: [],
  difficulty: {},
  volume: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WORKOUT:
      return {
        ...state,
        currentView: 'Home',
        totalRounds: payload.randomRounds,
        difficulty: payload.randomDifficulty,
        exerciseList: payload.randomExercises,
        completed: false,
        exerciseCount: 0,
      };
    case COUNTDOWN_STARTED:
      return {
        ...state,
        currentView: 'Countdown',
        countdown: true,
        completed: false,
        exerciseCount: 0,
      };
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
    case TIMER_SKIP:
      return {
        ...state,
        seconds: 3,
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
        exerciseCount: state.exerciseCount + 1,
      };
    case WORKOUT_STARTED:
      return {
        ...state,
        currentView: 'Workout',
        countdown: false,
        currentRound: 1,
      };
    case WORKOUT_COMPLETED:
      return {
        ...state,
        currentView: 'Finish',
        paused: false,
        working: false,
        resting: false,
        completed: true,
        seconds: 0,
        currentRound: 0,
        currentExercise: 0,
        exerciseCount: state.exerciseCount + 1,
      };
    case NEXT_EXERCISE:
      return {
        ...state,
        seconds: payload,
        working: true,
        resting: false,
        currentExercise:
          state.currentExercise === state.exerciseList.length
            ? 1
            : state.currentExercise + 1,
        currentRound:
          state.currentExercise === state.exerciseList.length
            ? state.currentRound + 1
            : state.currentRound,
      };
    case NEXT_REST:
      return {
        ...state,
        seconds: payload,
        working: false,
        resting: true,
      };
    case TOGGLE_VOLUME:
      return {
        ...state,
        volume: !state.volume,
      };
    default:
      return state;
  }
}
