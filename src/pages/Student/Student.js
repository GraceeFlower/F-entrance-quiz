import React from 'react';
import StudentList from '../../components/StudentList/StudentList';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      students: [],
    };
  }

  componentDidMount() {
    fetch('https://localhost:8080/students')
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            students: result.students,
          });
        }
        // (error) => {
        //   this.setState({
        //     error
        //   });
        // }
      );
  }

  render() {
    const { students } = this.state;

    return (
      <div>
        <StudentList students={students} />
      </div>
    );
  }
}

export default Student;
