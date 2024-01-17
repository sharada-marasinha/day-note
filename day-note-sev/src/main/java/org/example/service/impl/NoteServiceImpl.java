package org.example.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.example.entity.NoteEntity;
import org.example.model.Note;
import org.example.reository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class NoteServiceImpl implements NoteService{
    @Autowired
    NoteRepository repository;
    @Autowired
    ObjectMapper mapper;
    @Override
    public void addNote(Note note) {
        NoteEntity entity = mapper.convertValue(note, NoteEntity.class);
        repository.save(entity);
    }

    @Override
    public List<NoteEntity> getNotes() {
        return repository.findAll();
    }
}
