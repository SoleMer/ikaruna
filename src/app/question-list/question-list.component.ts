import { Component, OnInit } from '@angular/core';
import { Question } from '../ikaruna-questions/question';
import { QuestionDataService } from '../question-data.service';
import { UserControlService } from '../user-control.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions: Question[] = []; 

  constructor(private questionDataSvc: QuestionDataService,
    private userControlSvc: UserControlService) { }

  ngOnInit(): void {
    this.questionDataSvc.getAll()
    .subscribe((res) => {
      this.questions = res;
      console.log(this.questions);
    });
  }

}
