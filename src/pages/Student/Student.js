import React from 'react';
import StudentList from '../../components/StudentList/StudentList';
import './Student.css';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // error: null,
      students: [
        { id: 1, name: 'Lily' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Bob' },
        { id: 4, name: 'Bob' },
        { id: 5, name: 'Bob' },
        { id: 6, name: 'Bob' },
        { id: 7, name: 'Bob' },
        { id: 8, name: 'Bob' },
        { id: 9, name: 'Bob' },
        { id: 10, name: 'Bob' },
      ],
    };
  }

  componentDidMount() {
    // fetch('http://localhost:8080/students', { mode: 'no-cors'})
    //   .then((res) => res.json())
    //   .then((data) => {
    //       let students = data.results;
    //       this.setState({students});
    //     },
    //     (error) => {
    //       this.setState({
    //         error
    //       });
    //     }
    //   );
  }

  render() {
    const { students } = this.state;

    return (
      <div className="student-page">
        <StudentList students={students} />
      </div>
    );
  }
}

export default Student;
