// Assuming you have an interface like this
// Note.ts


// Your component
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Note } from './Note';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css'],
})


export class ViewAllComponent implements OnInit {
  private http;
  public noteList:any = {}; 
  public selectedNote: any = {};

  constructor(private httpCliant: HttpClient) {
    this.http = httpCliant;
  }

  ngOnInit(): void {
    this.loadNotesInfo();
  }

  loadNotesInfo() {
    this.http.get<Note>('http://localhost:8080/note/get').subscribe((data) => {
      this.noteList = {
        date: new Date(data.date as string).toString(),
        i_cet: data.i_cet,
        home: data.home,
        work: data.work,
        task: data.task,
        body: data.body,
        project: data.project,
        spacial: data.spacial,
        income: data.income,
        outCome: data.outCome,
        re_mining: data.re_mining
      };

      console.log(data);
    });
  }

  removeNotes() {
    let api = 'http://localhost:8080/note/' + this.selectedNote.id;
    this.http.delete(api).subscribe((data) => {
      console.log(data);
      this.loadNotesInfo();
    });
  }

  setSelectedNote(note: any) {
    this.selectedNote = note;
    console.log(this.selectedNote);
  }
}
