package com.example.userapi.models;

import lombok.*;
import javax.persistence.*;

@Data
@AllArgsConstructor @NoArgsConstructor @Getter @Setter
@Entity @Table(name = "USERS")

public class Users {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "NAME")
    private String NAME;

    @Column(name = "EMAIL")
    private String EMAIL;

    @Column(name = "ZIP")
    private Integer ZIP;

    @Column(name = "AGERANGE")
    private String AGERANGE;

    @Column(name = "INDUSTRY")
    private String INDUSTRY;
}
