import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { QuestionListComponent } from './question-list/question-list.component';
import { IkarunaNotificationsComponent } from './ikaruna-notifications/ikaruna-notifications.component';
import { AddTherapyComponent } from './add-therapy/add-therapy.component';
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms'
import { IkarunaSectionComponent } from './ikaruna-section/ikaruna-section.component';
import { LogAndCheckInComponent } from './log-and-check-in/log-and-check-in.component';
import { AddWorkshopComponent } from './add-workshop/add-workshop.component';
import { TherapyListComponent } from './therapy-list/therapy-list.component';
import { BtnDeleteComponent } from './btn-delete/btn-delete.component';
import { BtnEditComponent } from './btn-edit/btn-edit.component';
import { IkarunaProfileComponent } from './ikaruna-profile/ikaruna-profile.component';
import { AddEditTherapyComponent } from './add-edit-therapy/add-edit-therapy.component';

@NgModule({
  declarations: [
    AppComponent,
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
    IkarunaWorkshopsComponent,
    QuestionListComponent,
    IkarunaNotificationsComponent,
    AddTherapyComponent,
    UserListComponent,
    IkarunaSectionComponent,
    LogAndCheckInComponent,
    AddWorkshopComponent,
    TherapyListComponent,
    BtnDeleteComponent,
    BtnEditComponent,
    IkarunaProfileComponent,
    AddEditTherapyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
