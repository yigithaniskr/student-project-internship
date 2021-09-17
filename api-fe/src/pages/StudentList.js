import React, { useState, useEffect } from "react";
import {  Button, Table } from "semantic-ui-react";
import StudentService from "../services/studentService";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  let studentService = new StudentService()
  let studentDelete = (id)=>{
    studentService.delete(id);
    window.location.reload();
  }

  useEffect(()=>{
    studentService.getStudents().then(result => setStudents(result.data))
  },[])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Student Id</Table.HeaderCell>
            <Table.HeaderCell>Identity Number</Table.HeaderCell>
            <Table.HeaderCell>Name</Table.HeaderCell>
            <Table.HeaderCell>Phone Number</Table.HeaderCell>
            <Table.HeaderCell>City Id</Table.HeaderCell>
            <Table.HeaderCell>City Name</Table.HeaderCell>
            <Table.HeaderCell>Town Id</Table.HeaderCell>
            <Table.HeaderCell>Town Name</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {students.map((student) => (
            <Table.Row key={student.studentId}>
              <Table.Cell>{student.studentId}</Table.Cell>
              <Table.Cell>{student.identityNumber}</Table.Cell>
              <Table.Cell>{student.name}</Table.Cell>
              <Table.Cell>{student.phoneNumber}</Table.Cell>
              <Table.Cell>{student.city.cityId}</Table.Cell>
              <Table.Cell>{student.city.name}</Table.Cell>
              <Table.Cell>{student.town.townId}</Table.Cell>
              <Table.Cell>{student.town.name}</Table.Cell>
              <Table.Cell><Button onClick={()=>studentDelete(student.studentId)} color="red" icon="trash"></Button></Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>        
      </Table>
    </div>
  );
}
