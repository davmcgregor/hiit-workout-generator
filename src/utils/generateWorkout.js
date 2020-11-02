import AllExercises from '../data/AllExercises.js';
import random from './random';

const generateWorkout = () => {
  const randomRounds = random([3, 4])[0];
  const randomExerciseCount = random([6, 7, 8, 9, 10, 11, 12])[0];
  const randomExercises = random(AllExercises).slice(0, randomExerciseCount);
  const randomDifficulty = random([
    { level: 'Hard', work: 30, rest: 30 },
    { level: 'Harder', work: 35, rest: 25 },
    { level: 'Hardest', work: 40, rest: 20 },
  ])[0];

  return { randomRounds, randomExercises, randomDifficulty };
};

export default generateWorkout;
