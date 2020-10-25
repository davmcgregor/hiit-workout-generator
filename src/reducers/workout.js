import {
  GET_WORKOUT,
  START_COUNTDOWN,
  END_COUNTDOWN,
  CHANGE_EXERCISE,
  CHANGE_ROUND,
} from '../actions/types';

const initialState = {
  exercises: [],
  fullWorkout: [],
  rounds: null,
  difficulty: {},
  currentComponent: 'Landing',
  currentExercise: {},
  currentExerciseIndex: 0,
  currentRoundIndex: 0,
  workoutInProgress: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WORKOUT:
      return {
        ...state,
        exercises: payload.randomExercises,
        fullWorkout: payload.fullWorkout,
        rounds: payload.randomRounds,
        difficulty: payload.randomDifficulty,
        currentComponent: 'Landing',
        currentExercise: payload.fullWorkout[state.currentExerciseIndex],
      };
    case START_COUNTDOWN:
      return {
        ...state,
        currentComponent: 'StartingCountdown',
      };
    case END_COUNTDOWN:
      return {
        ...state,
        currentComponent: 'CurrentWorkout',
        workoutInProgress: true,
      };
    case CHANGE_EXERCISE:
      return {
        ...state,
        currentExerciseIndex: state.currentExerciseIndex + 1,
        currentExercise: state.fullWorkout[state.currentExerciseIndex + 1],
      };
    case CHANGE_ROUND:
      return {
        ...state,
        currentRoundIndex: state.currentRoundIndex + 1,
        currentExerciseIndex: 0,
        currentExercise: state.fullWorkout[0],
      };
    default:
      return state;
  }
}
