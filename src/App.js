import React, { Fragment } from 'react';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

import { Routes } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <Fragment>
        <Routes />
      </Fragment>
    </Provider>
  );
};

export default App;
