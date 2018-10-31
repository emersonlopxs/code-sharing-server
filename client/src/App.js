import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';
import GetCodes from './GetCodes';
import CreateCode from './CreateCode';

class App extends Component {
  state = {
    codes: []
  };

  componentDidMount() {}
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={GetCodes} />
          <Route path="/create_code" component={CreateCode} />
        </Switch>
      </Router>
    );
  }
}

export default App;
