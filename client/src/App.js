import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import Login from './components/login/Login';
import Main from './components/main/Main';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Login />
        </Route>
        <Route path='/main'>
          <Main />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
