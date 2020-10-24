import React, { Fragment } from 'react';
import './App.css';

import { Landing } from './components';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import StartingCountdown from './components/workout/StartingCountdown';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Landing />
        <StartingCountdown />
      </Fragment>
    </Provider>
  );
};

export default App;
