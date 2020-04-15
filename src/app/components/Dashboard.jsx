import React from "react";
import { connect } from "react-redux";
import { ConnectedStudentList } from "./StudentList";

export const Dashboard = ({ courses }) => (
  <div>
    <h1>Dashboard</h1>
    {courses.map((course) => (
      <ConnectedStudentList id={course.id} name={course.name} />
    ))}
  </div>
);

function mapStateToProps(state) {
  return {
    courses: state.courses,
  };
}

export const ConnectedDashboard = connect(mapStateToProps)(Dashboard);
