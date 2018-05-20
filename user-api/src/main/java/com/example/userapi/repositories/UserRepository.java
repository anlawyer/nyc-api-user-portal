package com.example.userapi.repositories;

import com.example.userapi.models.Users;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<Users, Long> {

}
