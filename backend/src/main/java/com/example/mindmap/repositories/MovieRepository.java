package com.example.mindmap.repositories;

import com.example.mindmap.entities.Movies;
import org.springframework.data.repository.CrudRepository;

public interface MovieRepository extends CrudRepository<Movies, String> {

}
