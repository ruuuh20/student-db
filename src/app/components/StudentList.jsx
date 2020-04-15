import React from "react";
import { connect } from "react-redux";

export const StudentList = ({ students, name }) => (
  <div>
    <h3>{name}</h3>
    <div>
      {students.map((student) => (
        <div>{student.name}</div>
      ))}
    </div>
  </div>
);

const mapStateToProps = (state, ownProps) => {
  let courseID = ownProps.id;
  return {
    name: ownProps.name,
    id: courseID,
    students: state.students.filter((student) => student.course === courseID),
  };
};

export const ConnectedStudentList = connect(mapStateToProps)(StudentList);
