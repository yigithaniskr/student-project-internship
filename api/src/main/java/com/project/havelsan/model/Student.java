package com.project.havelsan.model;
import javax.persistence.*;


@Entity
@Table(name = "student")
public class Student {

    @Id
    @Column(name = "STUDENT_ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long studentId;

    @Column(name = "IDENTITY_NUMBER", nullable = false)
    private String identityNumber;

    @Column(name = "NAME", nullable = false)
    private String name;

    @Column(name = "PHONE_NUMBER", nullable = false)
    private String phoneNumber;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "CITY_ID")
    private City city;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "TOWN_ID")
    private Town town;

    public Student() {
    }

    public Student(Long studentId, String identityNumber, String name, String phoneNumber, City city, Town town) {
        this.studentId = studentId;
        this.identityNumber = identityNumber;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.city = city;
        this.town = town;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getIdentityNumber() {
        return identityNumber;
    }

    public void setIdentityNumber(String identityNumber) {
        this.identityNumber = identityNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public Town getTown() {
        return town;
    }

    public void setTown(Town town) {
        this.town = town;
    }
}
