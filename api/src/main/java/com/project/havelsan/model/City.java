package com.project.havelsan.model;
import javax.persistence.*;

@Entity
@Table(name = "city")
public class City {

    @Id
    @Column(name = "CITY_ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.AUTO)
    private short cityId;

    @Column(name = "NAME", nullable = false)
    private String name;

    public City() {
    }

    public City(String name) {
        this.name = name;
    }

    public short getCityId() {
        return cityId;
    }

    public void setCityId(short cityId) {
        this.cityId = cityId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
