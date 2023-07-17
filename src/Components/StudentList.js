import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import './StudentList.css'
function StudentList() {
  return (
    <>
      <Button variant="primary" type="submit" id="refreshbtn">
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
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>Mca</td>
            <td>
              <div className='btndiv'>
                <Button variant="secondary" type="submit" id="editbtn">
                  Edit
                </Button>
                <Button variant="danger" type="submit" id="deletebtn">
                  Delete
                </Button>
              </div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>Mba</td>
            <td>
              <div className='btndiv'>
                <Button variant="secondary" type="submit" id="editbtn">
                  Edit
                </Button>
                <Button variant="danger" type="submit" id="deletebtn">
                  Delete
                </Button>
              </div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Larry </td>
            <td>the Bird</td>
            <td>BBA</td>
            <td>
              <div className='btndiv'>
                <Button variant="secondary" type="submit" id="editbtn">
                  Edit
                </Button>
                <Button variant="danger" type="submit" id="deletebtn">
                  Delete
                </Button>
              </div>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  );
}

export default StudentList;