import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashComponent } from './page/dash/dash.component';
import { NavComponent } from './comp/nav/nav.component';
import { LoginComponent } from './page/login/login.component';
import { AddDayNoteComponent } from './page/add-day-note/add-day-note.component';
import { ViewAllComponent } from './page/view-all/view-all.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Import Angular Material modules




@NgModule({
  declarations: [
    AppComponent,
    DashComponent,
    NavComponent,
    LoginComponent,
    AddDayNoteComponent,
    ViewAllComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
