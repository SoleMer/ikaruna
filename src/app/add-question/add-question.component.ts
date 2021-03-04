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
  viewNote: boolean = false;
  msgNote: string = "";
  loading: boolean = false;

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
    this.loading = true;
    this.q.user_id = this.status.id_user;
    this.questionDataSvc.add(this.q)
    .subscribe(res => {
      this.response =res;
      this.loading = false;
      this.viewFastNote('Consulta enviada. Te responderemos a la brevedad. Gracias por comunicarte!')
    });
    this.q = {
      text : '',
      user_id : this.status.id_user
    }
  }

  viewFastNote(txt:string) {
    this.msgNote = txt;
    this.viewNote = true;
    setTimeout(() => {
      this.hide();
    }, 5000);
  }

  hide() {
    this.viewNote = false;
  }

}
