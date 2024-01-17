import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './page/dash/dash.component';
import { LoginComponent } from './page/login/login.component';
import { AddDayNoteComponent } from './page/add-day-note/add-day-note.component';
import { ViewAllComponent } from './page/view-all/view-all.component';
import { RegisterComponent } from './page/register/register.component';

const routes: Routes = [
  {
    path:'dash',
    component:DashComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'add-note',
    component:AddDayNoteComponent
  },
  {
    path:'view-all',
    component:ViewAllComponent
  },
  {
    path:'register',
    component:RegisterComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
