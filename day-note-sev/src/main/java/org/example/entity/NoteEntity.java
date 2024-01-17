package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Note {
    Long id;
    Date date;
    String iCet;
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
