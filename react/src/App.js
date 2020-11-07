import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import { Day3, Day4, Day4Class, Day5, Day6, Day8, Day9 } from "./exercises";
import { HomeMenu } from "./parts/HomeMenu";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={HomeMenu} />
        <Route path="/day3-homework" component={Day3} />
        <Route path="/day4-class" component={Day4Class} />
        <Route path="/day4-homework" component={Day4} />
        <Route path="/day5-homework" component={Day5} />
        <Route path="/day6-homework" component={Day6} />
        <Route path="/day8-homework" component={Day8} />

        <Route path="/day9-class/:id?" component={Day9} />
      </Switch>
    </Router>
  );
}

export default App;
