package org.example.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class NoteEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long id;
    Date date;
    String i_cet;
    String home;
    String work;
    String task;
    String body;
    String project;
    String spacial;
    Double income;
    Double outCome;
    Double re_mining;
}
