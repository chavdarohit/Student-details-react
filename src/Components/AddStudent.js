import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './AddStudent.css';

function AddStudent() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
      setValidated(true);
    }
  };

  return (
    <Form className='sform' noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="header" controlId="header">
        <Form.Text>Student Details</Form.Text>
      </Form.Group>
  

      <Form.Group className="mb-3" controlId="sid">
        <Form.Control required type="number" placeholder="Enter Student id" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="sname">
        <Form.Control required type="text" placeholder="Student Name" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="sphone">
        <Form.Control required type="text" maxLength={10} placeholder="Student Phone No" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="scourse">
        <select>
            <option selected>Select Course</option>
            <option>MCA</option>
            <option>MBA</option>
            <option>BBA</option>
            <option>B.COM</option>
            <option>BSC</option>
        </select>
      </Form.Group>

      <Button variant="primary" type="submit" id="btn">
        Add / Update
      </Button>
    </Form>
  );
}

export default AddStudent;