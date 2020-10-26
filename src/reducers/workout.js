import {
  GET_WORKOUT,
  START_COUNTDOWN,
  END_COUNTDOWN,
  CHANGE_EXERCISE,
  FINISH_WORKOUT,
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
  lastExerciseOfRound: false,
  lastExerciseOfWorkout: false,
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
        currentExercise: state.fullWorkout[0],
        currentExerciseIndex: 0,
        currentRoundIndex: 0,
      };
    case END_COUNTDOWN:
      return {
        ...state,
        currentComponent: 'CurrentWorkout',
      };
    case CHANGE_EXERCISE:
      return {
        ...state,
        currentExerciseIndex:
          state.currentExerciseIndex === state.fullWorkout.length - 1
            ? 0
            : state.currentExerciseIndex + 1,
        currentExercise:
          state.currentExerciseIndex === state.fullWorkout.length - 1
            ? state.fullWorkout[0]
            : state.fullWorkout[state.currentExerciseIndex + 1],
        currentRoundIndex:
          state.currentExerciseIndex === state.fullWorkout.length - 1
            ? state.currentRoundIndex + 1
            : state.currentRoundIndex,
        lastExerciseOfWorkout:
          state.currentRoundIndex > state.rounds - 1 ||
          (state.currentRoundIndex === state.rounds - 1) &
            (state.currentExerciseIndex === state.fullWorkout.length - 3)
            ? true
            : false,
      };
    case FINISH_WORKOUT:
      return {
        ...state,
        currentComponent: 'Finish',
        currentExerciseIndex: 0,
        currentRoundIndex: 0,
        lastExerciseOfRound:
          state.currentExerciseIndex === state.fullWorkout.length - 1
            ? true
            : false,
        lastExerciseOfWorkout:
          state.currentRoundIndex > state.rounds - 1 ||
          (state.currentRoundIndex === state.rounds - 1) &
            (state.currentExerciseIndex === state.fullWorkout.length - 1)
            ? true
            : false,
      };
    default:
      return state;
  }
}
