import React from 'react';
import { Router, Route, Switch } from 'wouter';
import Layout from './components/layout/layout';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Layout} />
      </Switch>
    </Router>
  );
}

export default App;
