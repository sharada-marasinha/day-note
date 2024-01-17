package org.example.controller;

import org.example.entity.NoteEntity;
import org.example.model.Note;
import org.example.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/note")
public class NoteController {
    @Autowired
    NoteService service;
    @PostMapping("/add")
    public void addNote(@RequestBody Note note){
        service.addNote(note);
    }

    @GetMapping("/get")
    public List<NoteEntity> getNotes(){
        return service.getNotes();
    }
}
