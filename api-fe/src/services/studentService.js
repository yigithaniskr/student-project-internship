import axios from "axios";

export default class StudentService{
    getStudents(){
        return axios.get("http://localhost:8080/api/students")
    }
    getStudentByName(studentName){
        return axios.get("http://localhost:8080/api/studentByName/"+studentName)
    }
    getStudentByStudentId(id){
        return axios.get("http://localhost:8080/api/studentByStudentId/"+id)
    }
    getStudentByIdentityNumber(identityNumber){
        return axios.get("http://localhost:8080/api/studentByIdentityNumber/"+identityNumber)
    }
    getStudentByPhoneNumber(phoneNumber){
        return axios.get("http://localhost:8080/api/studentByPhoneNumber/"+phoneNumber)
    }
    getStudentByCityId(cityId){
        return axios.get("http://localhost:8080/api/studentByCityId/"+cityId)
    }
    getStudentByTownId(townId){
        return axios.get("http://localhost:8080/api/studentByTownId/"+townId)
    }
    add(student){
        return axios.post("http://localhost:8080/api/add",student)
    }
    update(student){
        return axios.put("http://localhost:8080/api/update",student)
    }
    delete(id){
        return axios.delete("http://localhost:8080/api/delete/"+id) 
    }
}