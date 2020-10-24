import React, { Fragment } from 'react';
import './App.css';

import { Landing, StartingCountdown, CurrentWorkout } from './components';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Landing />
        <StartingCountdown />
        <CurrentWorkout />
      </Fragment>
    </Provider>
  );
};

export default App;
