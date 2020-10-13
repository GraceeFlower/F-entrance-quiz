import React from 'react';
import './StudentGroup.css';
import GroupDetail from './GroupDetail';

class StudentGroup extends React.Component {
  render() {
    const nameList = [1, 2, 3, 4, 5, 6];
    return (
      <div className="student-group">
        <header className="group-header">
          <h1>分组列表</h1>
          <input className="separate-button" type="button" value="分组学员" />
        </header>
        {nameList.map((groupName) => (
          <GroupDetail groupName={groupName} />
        ))}
      </div>
    );
  }
}

export default StudentGroup;
