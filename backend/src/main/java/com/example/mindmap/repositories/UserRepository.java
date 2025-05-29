package com.example.mindmap.repositories;

import org.springframework.data.repository.CrudRepository;
import com.example.mindmap.entities.User;

public interface UserRepository extends CrudRepository<User, String> {
}
