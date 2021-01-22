import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TherapyListComponent } from './therapy-list/therapy-list.component';
import { IkarunaTherapiesComponent } from './ikaruna-therapies/ikaruna-therapies.component';
import { IkarunaLoginComponent } from './ikaruna-login/ikaruna-login.component';
import { IkarunaCheckInComponent } from './ikaruna-check-in/ikaruna-check-in.component';
import { IkarunaTakeATurnComponent } from './ikaruna-take-a-turn/ikaruna-take-a-turn.component';
import { IkarunaAboutComponent } from './ikaruna-about/ikaruna-about.component';
import { IkarunaQuestionsComponent } from './ikaruna-questions/ikaruna-questions.component';
import { IkarunaContactComponent } from './ikaruna-contact/ikaruna-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    TherapyListComponent,
    IkarunaTherapiesComponent,
    IkarunaLoginComponent,
    IkarunaCheckInComponent,
    IkarunaTakeATurnComponent,
    IkarunaAboutComponent,
    IkarunaQuestionsComponent,
    IkarunaContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
