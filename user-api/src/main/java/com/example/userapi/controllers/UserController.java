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

       // userFromDb.setName(userRequest.name);
       // userFromDb.setEmail(userRequest.email);
       // userFromDb.setZip(userRequest.zip);
       // userFromDb.setAgeRange(userRequest.ageRange);
       // userFromDb.setIndustry(userRequest.industry);

       return userRepository.save(userFromDb);
   }

   @DeleteMapping("/{userId}")
     public HttpStatus deleteUserById(@PathVariable Long userId) {
        userRepository.delete(userId);
     return HttpStatus.OK;
   }
}
