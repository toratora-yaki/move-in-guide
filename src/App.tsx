import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/index';
import Voice from './pages/voice';
import Events from './pages/events';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/voice" component={Voice} />
        <Route path="/events" component={Events} />
      </Switch>
    </Router>
  );
};

export default App;