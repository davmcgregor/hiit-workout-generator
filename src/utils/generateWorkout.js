import AllExercises from '../data/AllExercises.js';
import random from './random';

const generateWorkout = () => {
  const randomRounds = random([3,4])[0]
  const randomExerciseCount = random([6,7,8,9,10,11,12])[0]
  const randomExercises = random(AllExercises).slice(0, randomExerciseCount)

  return {randomRounds, randomExercises}
}

export default generateWorkout;
