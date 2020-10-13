import React from 'react';
import './GroupDetail.css';

class GroupDetail extends React.Component {
  render() {
    return (
      <div className="group-detail">
        <header className="group-name">{this.props.groupName}</header>
        <ul className="group-member-list">
          <li>1. Bob</li>
          <li>2. Lily</li>
        </ul>
      </div>
    );
  }
}

export default GroupDetail;
