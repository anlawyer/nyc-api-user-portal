package com.example.userapi.controllers;

import com.example.userapi.models.Users;
import com.example.userapi.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;

    @RequestMapping("/")
    public String home() {
        return "some users";
    }

//    @GetMapping("/")
//    public Iterable<Users> findAllFavorite() {
//        return userRepository.findAll();
//    }

}
