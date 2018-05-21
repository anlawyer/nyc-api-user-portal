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

   @GetMapping("/")
   public Iterable<Users> findAllUsers() {
       return userRepository.findAll();
   }

   @PostMapping("/")
   public Users createNewUser(@RequestBody Users newUser) {
     return userRepository.save(newUser);
   }
}
