import React, { useState } from "react";
import {Button,Table } from "semantic-ui-react";
import StudentService from "../services/studentService";

export default function StudentFind() {
  const [students, setStudents] = useState([]);

  const [cities, setCities] = useState([
    { value: 1, text: "İzmir" },
    { value: 2, text: "İstanbul" },
    { value: 3, text: "Ankara" },
  ]);

  const [towns, setTowns] = useState([
    { cityId: 1, value: 1, text: "Karşıyaka" },
    { cityId: 1, value: 2, text: "Buca" },
    { cityId: 1, value: 3, text: "Konak" },
    { cityId: 2, value: 4, text: "Kadıköy" },
    { cityId: 2, value: 5, text: "Bakırköy" },
    { cityId: 3, value: 6, text: "Çankaya" },
    { cityId: 3, value: 7, text: "Keçiören" },
    { cityId: 3, value: 8, text: "Mamak" },
  ]);

  const [tmpTowns, setTmpTowns] = useState([]);

  const townSet = (activeCity) => {
    const tmp = towns.filter((x) => x.cityId == activeCity);
    setTmpTowns(tmp);
  };

  const [formValues, setFormValues] = useState({
    Id: "",
    Identity: "",
    Name: "",
    Phone: "",
    City: "",
    Town: "",
    CityId: 0,
    TownId: 0,
  });

  const [searchInput, setSearchInput] = useState("");

  const setSearchValue = (key, value) => {
    let tmp = formValues;
    tmp[key] = value;
    setSearchInput(key);
  };

  let studentService = new StudentService();

  const handlerFind = () => {
    switch (searchInput) {
      case "Id":
        studentService.getStudentByStudentId(formValues.Id).then((result) => {
          const { data } = result;
          setStudents([data]);
        });
        break;

      case "Identity":
        studentService
          .getStudentByIdentityNumber(formValues.Identity)
          .then((result) => {
            const { data } = result;
            setStudents([data]);
          });
        break;

      case "Name":
        studentService.getStudentByName(formValues.Name).then((result) => {
           const { data } = result;
          setStudents(data);
        });
        break;

      case "Phone":
        studentService
          .getStudentByPhoneNumber(formValues.Phone)
          .then((result) => {
            const { data } = result;
            setStudents([data]);
          });
        break;

      case "CityId":
        studentService.getStudentByCityId(formValues.CityId).then((result) => {
          const { data } = result;
          setStudents(data);
        });
        break;

      case "TownId":
        studentService.getStudentByTownId(formValues.TownId).then((result) => {
          const { data } = result;
          setStudents(data);
        });
        break;

      default:
        break;
    }
  };

  return (
    <>
      <div>

      <div className="ui fluid input " style={{ marginBottom: 10 }}>
          <input
            placeholder="Student Id"
            onChange={(e) => {
              setSearchValue("Id", e.target.value);
            }}
          />
        </div>
        
        <div className="ui fluid input " style={{ marginBottom: 10 }}>
          <input
            placeholder="Identity Number"
            onChange={(e) => {
              setSearchValue("Identity", e.target.value);
            }}
          />
        </div>

        <div className="ui fluid input" style={{ marginBottom: 10 }}>
          <input
            placeholder="Name"
            onChange={(e) => {
              setSearchValue("Name", e.target.value);
            }}
          />
        </div>

        <div className="ui fluid input" style={{ marginBottom: 10 }}>
          <input
            placeholder="Phone Number"
            onChange={(e) => {
              setSearchValue("Phone", e.target.value);
            }}
          />
        </div>

        <select
          className="ui fluid selection dropdown "
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            const cityId = e.target.value;
            console.log(cityId);
            setSearchValue("CityId", cityId);
            townSet(cityId);
          }}
        >
          <option value="0">Seçiniz</option>
          {cities.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>

        <select
          className="ui fluid selection dropdown"
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            setSearchValue("TownId", e.target.value);
          }}
        >
          <option value="">Seçiniz</option>
          {tmpTowns.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>

        <Button color="black" onClick={handlerFind}>
        Find
        </Button>
      </div>

      {students.length > 0 && (
        <Table celled>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Student Id</Table.HeaderCell>
              <Table.HeaderCell>Identity Number</Table.HeaderCell>
              <Table.HeaderCell>Name</Table.HeaderCell>
              <Table.HeaderCell>Phone Number</Table.HeaderCell>
              <Table.HeaderCell>City Name</Table.HeaderCell>
              <Table.HeaderCell>Town Name</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {students.map((student) => (
              <Table.Row key={student.studentId}>
                <Table.Cell>{student.studentId}</Table.Cell>
                <Table.Cell>{student.identityNumber}</Table.Cell>
                <Table.Cell>{student.name}</Table.Cell>
                <Table.Cell>{student.phoneNumber}</Table.Cell>
                <Table.Cell>{student.city.name}</Table.Cell>
                <Table.Cell>{student.town.name}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </>
  );
}
