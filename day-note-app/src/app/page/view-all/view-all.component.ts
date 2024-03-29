// Assuming you have an interface like this
// Note.ts


// Your component
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


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
    this.http.get('http://localhost:8080/note/get').subscribe((data) => {
      this.noteList = data;

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

  updateNote(){
    this.http.post("http://localhost:8080/note/add",this.selectedNote)
    .subscribe(data =>{
      console.log(data);
      this.selectedNote={};
    })
  }
}
