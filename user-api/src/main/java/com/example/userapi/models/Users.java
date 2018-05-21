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

    @Column(name = "AGE_RANGE")
    private String AGE_RANGE;

    @Column(name = "INDUSTRY")
    private String INDUSTRY;
}
