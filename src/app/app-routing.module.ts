import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IkarunaAboutComponent } from './ikaruna-about/ikaruna-about.component';
import { IkarunaLoginComponent } from './ikaruna-login/ikaruna-login.component';
import { IkarunaQuestionsComponent } from './ikaruna-questions/ikaruna-questions.component';
import { IkarunaTherapiesComponent } from './ikaruna-therapies/ikaruna-therapies.component';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { TherapyListComponent } from './therapy-list/therapy-list.component';
import { WorkshopListComponent } from "./workshop-list/workshop-list.component";
import { IkarunaShiftsComponent } from "./ikaruna-shifts/ikaruna-shifts.component";
import { IkarunaWorkshopsComponent } from './ikaruna-workshops/ikaruna-workshops.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'therapies',
    pathMatch: 'full',
  },
  {
    path: 'therapies',
    component: IkarunaTherapiesComponent,
  },
  {
    path: 'about',
    component: IkarunaAboutComponent,
  },
  {
    path: 'questions',
    component: IkarunaQuestionsComponent,
  },
  {
    path: 'workshops',
    component: IkarunaWorkshopsComponent,
  },
  {
    path: 'shifts',
    component: IkarunaShiftsComponent,
  },
  {
    path: 'login',
    component: IkarunaLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
