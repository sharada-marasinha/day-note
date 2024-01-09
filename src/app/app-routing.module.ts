import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashComponent } from './page/dash/dash.component';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
  {
    path:'dash',
    component:DashComponent
  },
  {
    path:'login',
    component:LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
