import React from 'react';
import './StudentGroup.css';
import GroupDetail from './GroupDetail';

class StudentGroup extends React.Component {
  render() {
    return (
      <div className="student-group">
        <header className="group-header">
          <h1>分组列表</h1>
          <input className="separate-button" type="button" value="分组学员" />
        </header>
        <GroupDetail />
      </div>
    );
  }
}

export default StudentGroup;
