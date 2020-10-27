import AllExercises from '../data/AllExercises.js';
import random from './random';

const generateWorkout = () => {
  if (process.env.NODE_ENV === 'development') {
    const randomRounds = random([3])[0];
    const randomExerciseCount = random([3])[0];
    const randomExercises = random(AllExercises).slice(0, randomExerciseCount);
    const randomDifficulty = random([{ level: 'Easy', on: 4, off: 2 }])[0];

    let fullWorkout = [...randomExercises];
    let i = 1;
    while (i <= fullWorkout.length) {
      fullWorkout.splice(i, 0, { category: 'Rest', name: 'Rest' });
      i += 2;
    }

    fullWorkout.forEach(function (item) {
      if (item['category'] === 'Rest') {
        item['interval'] = randomDifficulty['off'];
      } else {
        item['interval'] = randomDifficulty['on'];
      }
    });

    return { randomRounds, randomExercises, randomDifficulty, fullWorkout };
  } else {
    const randomRounds = random([3, 4])[0];
    const randomExerciseCount = random([6, 7, 8, 9, 10, 11, 12])[0];
    const randomExercises = random(AllExercises).slice(0, randomExerciseCount);
    const randomDifficulty = random([
      { level: 'Hard', on: 30, off: 30 },
      { level: 'Harder', on: 35, off: 25 },
      { level: 'Hardest', on: 40, off: 20 },
    ])[0];

    let fullWorkout = [...randomExercises];
    let i = 1;
    while (i <= fullWorkout.length) {
      fullWorkout.splice(i, 0, { category: 'Rest', name: 'Rest' });
      i += 2;
    }

    fullWorkout.forEach(function (item) {
      if (item['category'] === 'Rest') {
        item['interval'] = randomDifficulty['off'];
      } else {
        item['interval'] = randomDifficulty['on'];
      }
    });

    return { randomRounds, randomExercises, randomDifficulty, fullWorkout };
  }
};

export default generateWorkout;
