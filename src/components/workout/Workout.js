// import React, { Fragment, useEffect, useState, useRef } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { changeExercise, finishWorkout } from '../../actions/workout';

// const Workout = ({
//   changeExercise,
//   finishWorkout,
//   workout: {
//     rounds,
//     fullWorkout,
//     currentExercise: { name, interval, category, bodyweight },
//     currentExerciseIndex,
//     currentRoundIndex,
//     lastExerciseOfWorkout,
//   },
// }) => {
//   const [counter, setCounter] = useState(interval);
//   const savedCallback = useRef();

//   const callback = () => {
//     setCounter(counter - 1);
//   };

//   useEffect(() => {
//     savedCallback.current = callback;
//   });

//   useEffect(() => {
//     setCounter(interval);

//     const tick = () => {
//       savedCallback.current();
//     };

//     let id = setInterval(tick, 1000);
//     return () => clearInterval(id);
//   }, []);

//   useEffect(() => {
//     setCounter(interval);
//   }, [interval]);

//   // change counter
//   useEffect(() => {
//     if (counter === 0) {
//       lastExerciseOfWorkout ? finishWorkout() : changeExercise();
//     }
//   }, [counter]);

//   console.log(counter);

//   return (
//     <Fragment>
//       <h2>Counter: {counter}</h2>
//       <h3>
//         Round {currentRoundIndex + 1} of {rounds}
//       </h3>
//       <button
//         onClick={() => {
//           lastExerciseOfWorkout ? finishWorkout() : changeExercise();
//         }}
//       >
//         Next Exercise
//       </button>
//       <h1>
//         {name} {category === 'Rest' ? null : bodyweight && '(Bodyweight)'}
//       </h1>
//       {(category === 'Rest') &
//       (currentExerciseIndex + 1 < fullWorkout.length) ? (
//         <h3>Up Next: {fullWorkout[currentExerciseIndex + 1]['name']}</h3>
//       ) : null}

//       {(category === 'Rest') &
//       (currentExerciseIndex === fullWorkout.length - 1) ? (
//         <h3>Up Next: {fullWorkout[0]['name']}</h3>
//       ) : null}
//     </Fragment>
//   );
// };

// Workout.propTypes = {
//   workout: PropTypes.object.isRequired,
//   changeExercise: PropTypes.func.isRequired,
//   finishWorkout: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   workout: state.workout,
// });

// export default connect(mapStateToProps, {
//   changeExercise,
//   finishWorkout,
// })(Workout);
