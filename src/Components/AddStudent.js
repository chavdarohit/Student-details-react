import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import './AddStudent.css';
import { Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import StudentDataService from '../Services/student_services'


function AddStudent({ id, setStudentId }) {

  const [sid, setId] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [course, setCourse] = useState("");
  const [message, setMessage] = useState({ error: false, msg: "" });


  const handleSubmit = async (event) => {
    event.preventDefault(); // when we click sunmit it prevent to refresh page
    setMessage("");
    if (sid === "" || name === "" || phone === "" || course === "Select Course") {
      setMessage({ error: true, msg: "All fields are mandatory and correct" });
      return;
    }
    if (phone.length != 10 || isNaN(phone)) {
      setMessage({ error: true, msg: "Phone number must have 10 digits and Only Numbers" });
      return;
    }


    // if all the condition will be correct then this will perform
    const newStudent = { //it will create new student object
      sid,
      name,
      phone,
      course
    }

    try {

      if (id !== undefined && id !== "") {
        await StudentDataService.updateStudent(id, newStudent); //call the addstudent methofd of StudentDataservice class and pass the object
        console.log(id)
        setId("");
        setMessage({ error: false, msg: "Updated succesfully" });
      }
      else {

        await StudentDataService.addStudents(newStudent); //call the addstudent methofd of StudentDataservice class and pass the object
        setMessage({ error: false, msg: "New Student added succesfully" });

      }
    } catch (e) {
      setMessage({ error: true, msg: e.message });
    }

    setId("");
    setName("");
    setPhone("");
    setCourse("Select Course");

  }

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await StudentDataService.getStudent(id);
      setId(docSnap.data().sid);
      setName(docSnap.data().name);
      setPhone(docSnap.data().phone);
      setCourse(docSnap.data().course);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    // console.log("the id is ="+id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id])


  return (
    <>
      {message.msg && (
        <Alert
          variant={message?.error ? "danger" : "success"}
          dismissible
          onClose={() => setMessage("")}
        >
          {" "}
          {message?.msg}
        </Alert >
      )}

      <Form className='sform' onSubmit={handleSubmit}>
        <Form.Group className="header" controlId="header">
          <Form.Text>Student Details</Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="sid">
          <Form.Control type="number" placeholder="Enter Student id" value={sid}
            onChange={(e) => setId(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="sname">
          <Form.Control type="text" placeholder="Student Name" value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="sphone">
          <Form.Control type="text" maxLength={10} placeholder="Student Phone No" value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="scourse">
          <select value={course} onChange={(e) => setCourse(e.target.value)}>
            <option>Select Course</option>
            <option>MCA</option>
            <option>MBA</option>
            <option>BBA</option>
            <option>B.COM</option>
            <option>BSC</option>
          </select>
        </Form.Group>

        <Button variant="primary" type="submit">
          Add / Update
        </Button>
      </Form>
    </>
  );
}

export default AddStudent;