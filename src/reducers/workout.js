import {
  GET_WORKOUT,
  COUNTDOWN_STARTED,
  COUNTDOWN_COMPLETED,
} from '../actions/types';

const initialState = {
  currentComponent: 'Landing',
  active: false,
  seconds: 0,
  totalRounds: 0,
  currentRoundIndex: 0,
  resting: false,
  paused: false,
  completed: false,
  currentExerciseIndex: 0,
  exercises: [],
  difficulty: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_WORKOUT:
      return {
        ...state,
        exercises: payload.randomExercises,
        totalRounds: payload.randomRounds,
        difficulty: payload.randomDifficulty,
        currentComponent: 'Landing',
      };
    case COUNTDOWN_STARTED:
      return {
        ...state,
        currentComponent: 'Countdown',
        currentExercise: state.fullWorkout[0],
        currentExerciseIndex: 0,
        currentRoundIndex: 0,
      };
    case COUNTDOWN_COMPLETED:
      return {
        ...state,
        currentComponent: 'CurrentWorkout',
      };
    // case CHANGE_EXERCISE:
    //   return {
    //     ...state,
    //     currentExerciseIndex:
    //       state.currentExerciseIndex === state.fullWorkout.length - 1
    //         ? 0
    //         : state.currentExerciseIndex + 1,
    //     currentExercise:
    //       state.currentExerciseIndex === state.fullWorkout.length - 1
    //         ? state.fullWorkout[0]
    //         : state.fullWorkout[state.currentExerciseIndex + 1],
    //     currentRoundIndex:
    //       state.currentExerciseIndex === state.fullWorkout.length - 1
    //         ? state.currentRoundIndex + 1
    //         : state.currentRoundIndex,
    //     lastExerciseOfWorkout:
    //       state.currentRoundIndex > state.rounds - 1 ||
    //       (state.currentRoundIndex === state.rounds - 1) &
    //         (state.currentExerciseIndex === state.fullWorkout.length - 3)
    //         ? true
    //         : false,
    //   };
    // case FINISH_WORKOUT:
    //   return {
    //     ...state,
    //     currentComponent: 'Finish',
    //     currentExerciseIndex: 0,
    //     currentRoundIndex: 0,
    //     lastExerciseOfRound:
    //       state.currentExerciseIndex === state.fullWorkout.length - 1
    //         ? true
    //         : false,
    //     lastExerciseOfWorkout:
    //       state.currentRoundIndex > state.rounds - 1 ||
    //       (state.currentRoundIndex === state.rounds - 1) &
    //         (state.currentExerciseIndex === state.fullWorkout.length - 1)
    //         ? true
    //         : false,
    //   };
    default:
      return state;
  }
}
