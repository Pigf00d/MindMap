package com.example.mindmap.controllers;

import com.example.mindmap.entities.Movies;
import com.example.mindmap.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class MovieController {

    @Autowired
    private MovieRepository movieRepository;

    @PostMapping("/createMovie")
    public void createMovie(@RequestBody Movies movie) {
        movie.setTitle(movie.getTitle());
        movie.setDirector(movie.getDirector());
        movie.setYear(movie.getYear());
        movie.setGenre(movie.getGenre());
        movie.setImpact(movie.getImpact());
        movieRepository.save(movie);
    }

    @GetMapping("/getMovie/{id}")
    public Movies getMovieById(@PathVariable String id) {
        return movieRepository.findById(id).get();
    }

    // commented out for now
}
