import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import { Day3, Day4, Day4Class } from "./exercises";
import Day5 from "./exercises/day5/Day5";

function App() {
  return (
    <Router>
      <ul className="App">
        <li>
          <Link to="/day3-homework">day 3 homework</Link>
        </li>
        <li>
          <Link to="/day4-class">day 4 in class</Link>
        </li>
        <li>
          <Link to="/day4-homework">day 4 homework</Link>
        </li>
        <li>
          <Link to="/day5-homework">day 5 homework</Link>
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
