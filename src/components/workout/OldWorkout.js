// import React, { Fragment } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { skipTimer, togglePause } from '../../actions/workout';

// const Workout = ({
//   togglePause,
//   skipTimer,
//   workout: {
//     seconds,
//     working,
//     resting,
//     paused,
//     completed,
//     totalRounds,
//     currentRound,
//     currentExercise,
//     exerciseList,
//     difficulty,
//   },
// }) => {
//   const getStatusText = () => {
//     if (completed) {
//       return 'done';
//     }
//     if (paused) {
//       return 'pause';
//     }
//     if (resting) {
//       return 'rest';
//     }
//     if (working) {
//       return 'work';
//     }
//     return ' ';
//   };

//   const getButtonText = () => {
//     if (paused) {
//       return 'resume';
//     }
//     if (working || resting) {
//       return 'pause';
//     }
//     return ' ';
//   };

//   return (
//     <Fragment>
//       <h2>Counter: {seconds}</h2>
//       <h2>{getStatusText()}</h2>
//       <h3>
//         Round {currentRound} / {totalRounds}
//       </h3>

//       <h1>
//         {working && currentExercise}{' '}
//         {working ? (
//           exerciseList[currentExercise - 1]['name']
//         ) : (
//           <span>Rest</span>
//         )}
//       </h1>
//       <h4>
//         {resting &&
//           exerciseList[currentExercise === 3 ? 0 : currentExercise]['name']}
//       </h4>
//       <button onClick={() => togglePause()}>{getButtonText()}</button>
//       <button onClick={() => skipTimer()}>Skip</button>
//     </Fragment>
//   );
// };

// Workout.propTypes = {
//   workout: PropTypes.object.isRequired,
//   skipTimer: PropTypes.func.isRequired,
//   togglePause: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => ({
//   workout: state.workout,
// });

// export default connect(mapStateToProps, { skipTimer, togglePause })(Workout);
