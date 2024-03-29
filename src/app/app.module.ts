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
import { HttpClientModule } from '@angular/common/http';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms'
import { IkarunaSectionComponent } from './ikaruna-section/ikaruna-section.component';
import { LogAndCheckInComponent } from './log-and-check-in/log-and-check-in.component';
import { TherapyListComponent } from './therapy-list/therapy-list.component';
import { BtnDeleteComponent } from './btn-delete/btn-delete.component';
import { BtnEditComponent } from './btn-edit/btn-edit.component';
import { IkarunaProfileComponent } from './ikaruna-profile/ikaruna-profile.component';
import { AddEditTherapyComponent } from './add-edit-therapy/add-edit-therapy.component';
import { AddQuestionComponent } from './add-question/add-question.component';
import { AddEditWorkshopComponent } from './add-edit-workshop/add-edit-workshop.component';
import { ShiftUserListComponent } from './shift-user-list/shift-user-list.component';
import { FastNoteComponent } from './fast-note/fast-note.component';
import { ErrorNoAdminComponent } from './error-no-admin/error-no-admin.component';
import { ChangeImgComponent } from './change-img/change-img.component';
import { IkarunaFooterComponent } from './ikaruna-footer/ikaruna-footer.component';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap/';

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
    UserListComponent,
    IkarunaSectionComponent,
    LogAndCheckInComponent,
    TherapyListComponent,
    BtnDeleteComponent,
    BtnEditComponent,
    IkarunaProfileComponent,
    AddEditTherapyComponent,
    AddQuestionComponent,
    AddEditWorkshopComponent,
    ShiftUserListComponent,
    FastNoteComponent,
    ErrorNoAdminComponent,
    ChangeImgComponent,
    IkarunaFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
