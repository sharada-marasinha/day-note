package org.example.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.text.SimpleDateFormat;
import java.util.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Note {
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

//{
//        "date": "2024-01-17T12:30:00",
//        "i_cet": "Sample iCet",
//        "home": "Sample home",
//        "work": "Sample work",
//        "task": "Sample task",
//        "body": "Sample body",
//        "project": "Sample project",
//        "spacial": "Sample special",
//        "income": 1000.0,
//        "outCome": 500.0,
//        "re_mining": 300.0
//}

