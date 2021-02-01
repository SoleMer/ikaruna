import { Component, OnInit } from '@angular/core';
import { UserControlService } from '../user-control.service';
import { UserStatus} from '../user-list/user';

@Component({
  selector: 'app-ikaruna-questions',
  templateUrl: './ikaruna-questions.component.html',
  styleUrls: ['./ikaruna-questions.component.scss']
})
export class IkarunaQuestionsComponent implements OnInit {

  status: UserStatus;
  name: string;

  constructor( private userControlService: UserControlService) {
    userControlService.logged.subscribe(s => this.status = s);
    this.name = 'question';
   }

  ngOnInit(): void {
  }

}
