import React, { useState } from "react";
import { FormField, Button} from "semantic-ui-react";
import StudentService from "../services/studentService";
import { toast } from "react-toastify";

export default function StudentAdd() {
  let studentService = new StudentService();

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

  const [initialValues, setInitialValues] = useState({
    studentId:"",
    identityNumber: "",
    name: "",
    phoneNumber: "",
    city: { cityId: "", name: "" },
    town: { townId: "", name: "" },
  });

  const setValues = (key, value) => {
    let tmp = initialValues;
    tmp[key] = value;
    setInitialValues(tmp);
  };

  const handleSave = () => {
    if (
      initialValues.studentId.trim().length > 0 &&
      initialValues.name.trim().length > 0 &&
      initialValues.identityNumber.trim().length > 0 &&
      initialValues.phoneNumber.trim().length > 0
    ) {
      studentService.update(initialValues).then((result) => {
        const { data } = result;
        toast.success(`Student Id : ${data.studentId} updated.`);
      });
    } else {
      toast.error("Cannot be empty");
    }
  };

  return (
    <div>
      <FormField>
        <div className="ui fluid input " style={{ marginBottom: 10 }}>
          <input
            placeholder="Student Id"
            onChange={(e) => {
              setValues("studentId", e.target.value);
            }}
          />
        </div>
      </FormField>
      <FormField>
        <div className="ui fluid input " style={{ marginBottom: 10 }}>
          <input
            placeholder="Identity Number"
            onChange={(e) => {
              setValues("identityNumber", e.target.value);
            }}
          />
        </div>
      </FormField>

      <FormField>
        <div className="ui fluid input" style={{ marginBottom: 10 }}>
          <input
            placeholder="Name"
            onChange={(e) => {
              setValues("name", e.target.value);
            }}
          />
        </div>
      </FormField>

      <FormField>
        <div className="ui fluid input" style={{ marginBottom: 10 }}>
          <input
            placeholder="Phone Number"
            onChange={(e) => {
              setValues("phoneNumber", e.target.value);
            }}
          />
        </div>
      </FormField>

      <FormField>
        <select
          className="ui fluid selection dropdown "
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            const cityId = e.target.value;
            var index = e.nativeEvent.target.selectedIndex;
            const name = e.nativeEvent.target[index].text;
            setValues("city", { cityId: cityId, name: name });
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
      </FormField>

      <FormField>
        <select
          className="ui fluid selection dropdown"
          style={{ marginBottom: 10 }}
          onChange={(e) => {
            const townId = e.target.value;
            var index = e.nativeEvent.target.selectedIndex;
            const name = e.nativeEvent.target[index].text;
            setValues("town", { townId: townId, name: name });
          }}
        >
          <option value="">Seçiniz</option>
          {tmpTowns.map((item) => (
            <option key={item.value} value={item.value}>
              {item.text}
            </option>
          ))}
        </select>{" "}
      </FormField>
      <Button
        color="black"
        onClick={() => {
          handleSave();
        }}
      >
        Update
      </Button>
    </div>
  );
}