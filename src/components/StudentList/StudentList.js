import React from 'react';
import './StudentList.css';

class StudentList extends React.Component {
  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <ul className="student-list">
          {this.props.students.map((student) => (
            <li key={student.id}>
              {student.id}. {student.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default StudentList;
