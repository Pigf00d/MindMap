package com.example.mindmap.controllers;

import com.example.mindmap.repositories.UserRepository;
import com.example.mindmap.DTOs.UserDTO;
import com.example.mindmap.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class UserController {

        @Autowired
        private UserRepository userRepository;

        @GetMapping("/getUser/{id}")
        public User getUserById(@PathVariable String id) {
                return userRepository.findById(id).get();
        }

        @PostMapping("/createUser")
        public void createTable(@RequestBody UserDTO userDTO) {
                User user = new User();
                user.setName(userDTO.getName());
                user.setEmail(userDTO.getEmail());
                user.setFavoriteThing(userDTO.getFavoriteThing());
                userRepository.save(user);
        }


}
