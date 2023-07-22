
import AddStudent from './Components/AddStudent';
import StudentList from './Components/StudentList';
import './App.css';
import { useState } from 'react';

function App() {
  const [studentId, setStudentId] = useState("");

  const getStudentId = (id) => {
    setStudentId(id);
  }

  return (
    <div className="App">
      <AddStudent id={studentId} setStudentId={setStudentId}/>
      <hr></hr>
      <StudentList getStudentId={getStudentId} />
    </div>
  );
}

export default App;
