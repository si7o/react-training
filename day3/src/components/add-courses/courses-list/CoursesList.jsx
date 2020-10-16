import React from "react";
import PropTypes from "prop-types";
import "./CoursesList.module.css";

const CoursesList = ({ courses }) => {
  const hasCourses = !!courses.length > 0;

  const listItems = courses.map((course) => (
    <li key={course.key}>{course.name}</li>
  ));

  return hasCourses && <ul>{listItems}</ul>;
};

CoursesList.propTypes = {
  courses: PropTypes.arrayOf(
    PropTypes.shape({ key: PropTypes.number, name: PropTypes.string })
  ).isRequired,
};

export default CoursesList;
