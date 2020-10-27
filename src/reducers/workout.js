import {
  GET_WORKOUT,
  COUNTDOWN_STARTED,
  COUNTDOWN_COMPLETED,
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
  countdown: false,
  working: false,
  resting: false,
  paused: false,
  completed: false,
  totalRounds: 0,
  currentRound: 0,
  currentExerciseIndex: 0,
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

    case COUNTDOWN_COMPLETED:
      return {
        ...state,
        currentComponent: 'Workout',
        countdown: false,
      };

    ///

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
        round: state.round + 1,
      };
    case REST_STARTED:
      return {
        ...state,
        resting: true,
      };
    case WORKOUT_STARTED:
      return {
        ...state,
        active: true,
        completed: false,
        round: 0,
      };
    case WORKOUT_COMPLETED:
      return {
        ...state,
        active: false,
        resting: false,
        completed: true,
      };
    default:
      return state;
  }
}
