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

   @GetMapping("/{userId}")
   public Users findOne(@PathVariable Long userId) {
     return userRepository.findOne(userId);
   }

   @PostMapping("/")
   public Users createNewUser(@RequestBody Users newUser) {
     return userRepository.save(newUser);
   }

   @PutMapping("/{userId}")
   public Users updateUserById(@PathVariable Long userId, @RequestBody Users userRequest) {

       Users userFromDb = userRepository.findOne(userId);

       userFromDb.setName(userRequest.getName());
       userFromDb.setEmail(userRequest.getEmail());
       userFromDb.setZip(userRequest.getZip());
       userFromDb.setAgeRange(userRequest.getAgeRange());
       userFromDb.setIndustry(userRequest.getIndustry());

       return userRepository.save(userFromDb);
   }
}
