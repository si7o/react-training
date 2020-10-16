import React from "react";
import { useState } from "react";
import CoursesList from "./courses-list/CoursesList";
import styles from "./AddCourses.module.css";

export const AddCourses = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");

  const handleInputChange = (event) => {
    setCourseName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const courseItem = { key: Date.now(), name: courseName };
    setCourses([...courses, courseItem]);
    setCourseName("");
  };

  const handleResetClick = () => {
    window.confirm("Do you want to remove all courses?") && setCourses([]);
  };

  const addCourseDisabled = !courseName;
  const resetDisabled = courses.length === 0;
  return (
    <div className={styles.addCourses}>
      <h1>Add Courses</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="course"
          placeholder="Please insert course name"
          onChange={handleInputChange}
          value={courseName}
        />
        <input type="submit" value="Add Course" disabled={addCourseDisabled} />
        <button
          type="button"
          value="reset"
          onClick={handleResetClick}
          disabled={resetDisabled}
        >
          Reset
        </button>
      </form>
      <CoursesList courses={courses} className={styles.coursesList} />
    </div>
  );
};

export default AddCourses;
