package org.example.reository;

import org.example.entity.NoteEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NoteRepository extends JpaRepository<NoteEntity,Long> {
}
