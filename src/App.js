import AddStudent from './Components/AddStudent';
import StudentList from './Components/StudentList';
import './App.css';

function App() {
  return (
    <div className="App">
      <AddStudent />
      <hr></hr>
      <StudentList />
    </div>
  );
}

export default App;
