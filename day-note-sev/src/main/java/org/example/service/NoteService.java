package org.example.service;

import org.example.entity.NoteEntity;
import org.example.model.Note;

import java.util.List;

public interface NoteService {
    public void addNote(Note note);

    List<NoteEntity> getNotes();
}
