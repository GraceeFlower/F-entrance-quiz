import React from 'react';
import axios from 'axios';
import StudentList from '../../components/StudentList/StudentList';
import './Student.css';
import StudentGroup from '../../components/StudentGroup/StudentGroup';
import 'babel-polyfill';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      students: null,
    };
  }

  async componentDidMount() {
    const students = await axios.get('http://localhost:8080/students');
    this.setState({ students: students.data });
  }

  render() {
    const { students } = this.state;

    return (
      <div className="student-page">
        <StudentGroup />
        <StudentList students={students} />
      </div>
    );
  }
}

export default Student;
