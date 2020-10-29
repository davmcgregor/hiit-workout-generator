// import React, { Fragment } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import { Landing, Countdown, Workout, Complete } from '../index';

// const Routes = ({ workout: { currentView } }) => {
//   return (
//     <Fragment>
//       {currentView === 'Landing' && <Landing />}
//       {currentView === 'Countdown' && <Countdown />}
//       {currentView === 'Workout' && <Workout />}
//       {currentView === 'Finish' && <Complete />}
//     </Fragment>
//   );
// };

// Routes.propTypes = {
//   workout: PropTypes.object.isRequired,
// };

// const mapStateToProps = (state) => ({
//   workout: state.workout,
// });

// export default connect(mapStateToProps)(Routes);
