package com.project.havelsan.service;

import com.project.havelsan.model.City;
import com.project.havelsan.model.Student;
import com.project.havelsan.model.Town;
import com.project.havelsan.repository.CityRepository;
import com.project.havelsan.repository.StudentRepository;
import com.project.havelsan.repository.TownRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    private final StudentRepository studentRepository;
    private final CityRepository cityRepository;
    private final TownRepository townRepository;

    public StudentService(StudentRepository studentRepository, CityRepository cityRepository, TownRepository townRepository) {
        this.studentRepository = studentRepository;
        this.cityRepository = cityRepository;
        this.townRepository = townRepository;
    }
    public List<Student> getAll(){
        return  studentRepository.findAll();
    }
    public Student getStudentByStudentId(long studentId){
        return studentRepository.findById(studentId).get();
    }
    public Student getStudentByIdentityNumber(String identityNumber) {
        return studentRepository.findByIdentityNumber(identityNumber);
    }
    public List<Student> getStudentByName(String name) {
        return studentRepository.findByName(name);
    }
    public Student getStudentByPhoneNumber(String phoneNumber) {
        return studentRepository.findByPhoneNumber(phoneNumber);
    }
    public List<Student> getStudentByCityId(short cityId){
        Optional<City> city = cityRepository.findById(cityId);
        List<Student> students = studentRepository.findByCity(city.get());

        return students;
    }
    public List<Student> getStudentByTownId(short townId){
        Optional<Town> town = townRepository.findById(townId);
        List<Student> students = studentRepository.findByTown(town.get());
        return students;
    }

    public Student add(Student student){
        return studentRepository.save(student);
    }
    public void delete(Long studentId){
        studentRepository.deleteById(studentId);
    }

}
