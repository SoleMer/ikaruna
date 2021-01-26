import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TherapyListComponent } from './therapy-list/therapy-list.component';
import { IkarunaTherapiesComponent } from './ikaruna-therapies/ikaruna-therapies.component';
import { IkarunaLoginComponent } from './ikaruna-login/ikaruna-login.component';
import { IkarunaCheckInComponent } from './ikaruna-check-in/ikaruna-check-in.component';
import { IkarunaAboutComponent } from './ikaruna-about/ikaruna-about.component';
import { IkarunaQuestionsComponent } from './ikaruna-questions/ikaruna-questions.component';
import { IkarunaContactComponent } from './ikaruna-contact/ikaruna-contact.component';
import { IkarunaApplyShiftComponent } from './ikaruna-apply-shift/ikaruna-apply-shift.component';
import { ShiftListComponent } from './shift-list/shift-list.component';
import { WorkshopListComponent } from "./workshop-list/workshop-list.component";
import { IkarunaShiftsComponent } from './ikaruna-shifts/ikaruna-shifts.component';
import { IkarunaWorkshopsComponent } from './ikaruna-workshops/ikaruna-workshops.component';

@NgModule({
  declarations: [
    AppComponent,
    TherapyListComponent,
    IkarunaTherapiesComponent,
    IkarunaLoginComponent,
    IkarunaCheckInComponent,
    IkarunaAboutComponent,
    IkarunaQuestionsComponent,
    IkarunaContactComponent,
    IkarunaApplyShiftComponent,
    ShiftListComponent,
    WorkshopListComponent,
    IkarunaShiftsComponent,
    IkarunaWorkshopsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
