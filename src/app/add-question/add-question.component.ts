import { Component, OnInit } from '@angular/core';
import { Reply } from '../therapy-list/therapy';
import { UserControlService } from '../user-control.service';
import { QuestionDataService } from '../question-data.service';
import { UserStatus} from '../user-list/user';
import { Question } from '../ikaruna-questions/question';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.scss']
})
export class AddQuestionComponent implements OnInit {

  status: UserStatus;
  q: Question;
  response: Reply;

  constructor( private userControlService: UserControlService ,
    private questionDataSvc: QuestionDataService) {
    userControlService.logged.subscribe(s => this.status = s);
  }
  
  ngOnInit(): void {
    this.q = {
      text : '',
      user_id : this.status.id_user
    }
  }

  add() {
    this.q.user_id = this.status.id_user;
    this.questionDataSvc.add(this.q)
    .subscribe(res => {
      this.response =res;
      console.log(this.response);
    });
  }

}
