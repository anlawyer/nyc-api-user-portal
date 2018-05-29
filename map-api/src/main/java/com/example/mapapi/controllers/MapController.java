package com.example.mapapi.controllers;

import com.example.mapapi.models.Map;
import com.example.mapapi.repositories.MapRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
public class MapController {
    @Autowired
    private MapRepository mapRepository;

    @RequestMapping("/")
    public String send() {
        return "MAPS";
    }

    @PostMapping("/")
    public Map createNewUser(@RequestBody Map newZip) {
      return mapRepository.save(newZip);
    }
}
