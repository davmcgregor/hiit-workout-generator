import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Redux
import { Provider } from 'react-redux';
import store from './store';

import { Home, About } from './components';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
        </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
