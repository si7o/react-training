import React from "react";
import { NavLink } from "react-router-dom";

export const HomeMenu = () => {
  return (
    <ul>
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
      <li>
        <NavLink to="/day6-homework" activeClassName="current-page">
          day 6 & 7 homework
        </NavLink>
      </li>
      <li>
        <NavLink to="/day8-homework" activeClassName="current-page">
          day 8, 9 & 10 homework
        </NavLink>
      </li>
      <li>
        <NavLink to="/day9-class" activeClassName="current-page">
          day 9 in class
        </NavLink>
      </li>
    </ul>
  );
};
