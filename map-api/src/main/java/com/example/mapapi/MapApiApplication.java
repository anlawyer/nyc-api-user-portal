package com.example.mapapi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class MapApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(MapApiApplication.class, args);
	}
}
