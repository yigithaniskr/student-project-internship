package com.project.havelsan.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name = "town")
public class Town {
    @Id
    @Column(name = "TOWN_ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private short townId;

    @ManyToOne(cascade=CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(name ="CITY_ID")
    @JsonIgnore
    private City city;

    @Column(name = "NAME", nullable = false)
    private String name;

    public Town() {
    }

    public Town(City city, String name) {
        this.city = city;
        this.name = name;
    }

    public short getTownId() {
        return townId;
    }

    public void setTownId(short townId) {
        this.townId = townId;
    }

    public City getCity() {
        return city;
    }

    public void setCity(City city) {
        this.city = city;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
