import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";

import "./App.css";
import { Day3, Day4, Day4Class } from "./exercises";
import Day5 from "./exercises/day5/Day5";

function App() {
  return (
    <Router>
      <ul className="App">
        <li>
          <NavLink to="/day3-homework" activeClassName="current-page">
            day 3 homework
          </NavLink>
        </li>
        <li>
          <NavLink to="/day4-class" activeClassName="current-page">
            day 4 in class
          </NavLink>
        </li>
        <li>
          <NavLink to="/day4-homework" activeClassName="current-page">
            day 4 homework
          </NavLink>
        </li>
        <li>
          <NavLink to="/day5-homework" activeClassName="current-page">
            day 5 homework
          </NavLink>
        </li>
      </ul>
      <div className="container">
        <Switch>
          <Route path="/day3-homework" component={Day3} exact />
          <Route path="/day4-class" component={Day4Class} exact />
          <Route path="/day4-homework" component={Day4} exact />
          <Route path="/day5-homework" component={Day5} exact />
        </Switch>
      </div>
    </Router>
  );
}

export default App;