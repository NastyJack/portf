import React from "react";
import Chuck from "./components/Chuck";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            children={
              <Link to="/chuckfacts">
                <Chuck />
              </Link>
            }
          />
          <Route
            exact
            path="/chuckfacts"
            children={
              <Link to="/">
                <button className="chuckbutton">Back</button>
              </Link>
            }
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
