import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import './StudentList.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import StudentDataService from '../Services/student_services'


function StudentList({ getStudentId }) {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();
  }, [])

  const getStudents = async () => {
    const data = await StudentDataService.getAllStudent();
    
    setStudents(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
  }

  const deleteHandler = async (id) => {
    await StudentDataService.deleteStudent(id);
    getStudents();
  }

  return (
    <>
      {/* <pre>{JSON.stringify(students, undefined, 2)}</pre> */}
      <Button variant="dark edit" onClick={() => getStudents()}>
        Refresh List
      </Button>

      <Table responsive border={1} align="center">
        <thead>
          <tr>
            <th>Student id</th>
            <th>Name</th>
            <th>Phone No</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((doc) => {
            return (
              <tr>
                <td>{doc.sid}</td>
                <td>{doc.name}</td>
                <td>{doc.phone}</td>
                <td>{doc.course}</td>
                <td>
                  <div className='btndiv'>
                    <Button variant="secondary"
                    onClick={(e) => getStudentId(doc.id)}
                    >
                      Edit
                    </Button>
                    <Button variant="danger" onClick={(e) => deleteHandler(doc.id)}
                    >
                      Delete
                    </Button>
                  </div>
                </td>
              </tr>

            );
          })}
        </tbody>
      </Table>
    </>
  );
}

export default StudentList;