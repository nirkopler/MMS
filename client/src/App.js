import React from 'react'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/'>
          {/* component */}
        </Route>
        <Route path='/main'>
          {/* component */}
        </Route>
      </Switch>
    </div>
  );
}

export default App;
