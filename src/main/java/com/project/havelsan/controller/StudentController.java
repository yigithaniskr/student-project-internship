package com.project.havelsan.controller;

import com.project.havelsan.model.City;
import com.project.havelsan.model.Student;
import com.project.havelsan.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }
    @GetMapping("/students")
    public ResponseEntity<List<Student>> getStudents() {
        return ResponseEntity.ok(studentService.getAll());
    }
    @GetMapping("/studentByStudentId/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id) {
        return ResponseEntity.ok(studentService.getStudentByStudentId(id));
    }
    @GetMapping("/studentByIdentityNumber/{identityNumber}")
    public ResponseEntity<Student> getStudentByIdentityNumber(@PathVariable String identityNumber) {
        return ResponseEntity.ok(studentService.getStudentByIdentityNumber(identityNumber));
    }
    @GetMapping("/studentByName/{name}")
    public ResponseEntity<List<Student>> getStudentByName(@PathVariable String name) {
        return ResponseEntity.ok(studentService.getStudentByName(name));
    }
    @GetMapping("/studentByPhoneNumber/{phoneNumber}")
    public ResponseEntity<Student> getStudentByPhoneNumber(@PathVariable String phoneNumber) {
        return ResponseEntity.ok(studentService.getStudentByPhoneNumber(phoneNumber));
    }
    @GetMapping("/studentByCityId/{cityId}")
    public ResponseEntity<List<Student>> getStudentByCityId(@PathVariable short cityId) {
        return ResponseEntity.ok(studentService.getStudentByCityId(cityId));
    }
    @GetMapping("/studentByTownId/{townId}")
    public ResponseEntity<List<Student>> getStudentByTownId(@PathVariable short townId){
        return ResponseEntity.ok(studentService.getStudentByTownId(townId));
    }
    @PostMapping("/add")
    public ResponseEntity<Student> add(@RequestBody Student student){
        return ResponseEntity.ok(studentService.add(student));
    }
    @PutMapping("/update")
    public ResponseEntity<Student> update(@RequestBody Student student){
        return ResponseEntity.ok(studentService.add(student));
    }
    @DeleteMapping("/id/{studentId}")
    public void delete(@PathVariable Long studentId){
        studentService.delete(studentId);
    }
}
