import { Component, OnInit } from '@angular/core';
import { Reply } from '../therapy-list/therapy';
import { UserControlService } from '../user-control.service';
import { QuestionDataService } from '../question-data.service';
import { UserStatus} from '../user-list/user';
import { Question } from './question';

@Component({
  selector: 'app-ikaruna-questions',
  templateUrl: './ikaruna-questions.component.html',
  styleUrls: ['./ikaruna-questions.component.scss']
})
export class IkarunaQuestionsComponent implements OnInit {

  status: UserStatus;
  q: Question;
  name: string;
  response: Reply;

  constructor( private userControlService: UserControlService ,
    private questionDataSvc: QuestionDataService) {
    userControlService.logged.subscribe(s => this.status = s);
    this.name = 'question';
  }
  
  ngOnInit(): void {
    this.q = {
      text : '',
      user_id : this.status.id_user
    }
    this.userControlService.checkSession()
    .subscribe(s => {
      this.status = s
    });
  }

  add() {
    this.q.user_id = this.status.id_user;
    this.questionDataSvc.add(this.q)
    .subscribe(res => {
      this.response =res;
    });
  }

}
