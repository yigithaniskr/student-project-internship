package com.project.havelsan.repository;

import com.project.havelsan.model.City;
import com.project.havelsan.model.Student;
import com.project.havelsan.model.Town;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    Student findByIdentityNumber(String identityNumber);
    List<Student> findByName(String name);
    Student findByPhoneNumber(String name);
    List<Student> findByCity(City city);
    List<Student> findByTown(Town town);

}
