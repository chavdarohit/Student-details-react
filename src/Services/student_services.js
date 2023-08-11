import { db } from "../firebase-config";

import { collection, getDoc, getDocs, addDoc, updateDoc, deleteDoc, doc } from "firebase/firestore";

const studentCollectionRef = collection(db, "students"); //refernce of the dataase
class StudentDataService {
    addStudents = (newStudent) => { //newstudent is argument to function add student
        return addDoc(studentCollectionRef, newStudent); // this will add new student to the refernce which is our database
    };

    updateStudent = (id, updatedStudent) => { // passed id and one argument
        const studentid = doc(db, "students", id); // finding the id from the document or database
        return updateDoc(studentid, updatedStudent); //updating on the particular student id
    };

    deleteStudent = (id) => { //providing id
        const studentid = doc(db, "students", id); //fetching the id from document
        return deleteDoc(studentid); //delete operation on particluar id
    };

    getAllStudent = () => {// fetching all the student if
        return getDocs(studentCollectionRef); //giving over Student refernce and getting

    };

    getStudent = (id) => {
        const studentid = doc(db, "students", id); //fetching the id from document
        return getDoc(studentid); //here only passing one id to fetch the particular record
    };

}

export default new StudentDataService();