import React from 'react';
import './StudentList.css';

class StudentList extends React.Component {
  render() {
    return (
      <div>
        <h1>学员列表</h1>
        <ul className="student-list">
          {/* TODO 注意判断students是否为null，为null时会报错导致页面出不来，修改如下 */}
          {this.props.students &&
            this.props.students.map((student) => (
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
