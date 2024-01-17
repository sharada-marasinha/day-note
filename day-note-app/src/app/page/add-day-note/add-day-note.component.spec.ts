import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDayNoteComponent } from './add-day-note.component';

describe('AddDayNoteComponent', () => {
  let component: AddDayNoteComponent;
  let fixture: ComponentFixture<AddDayNoteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddDayNoteComponent]
    });
    fixture = TestBed.createComponent(AddDayNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
