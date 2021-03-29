import { Component } from '@angular/core';
//import { CookieService } from 'ngx-cookie-service';
import { UserControlService } from './user-control.service';
import { UserStatus } from './user-list/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  status: UserStatus;
  navbarExpand: boolean = false;
  response: any;

  constructor( private userControlService: UserControlService,
    //private cookieSvc: CookieService
    ) {
      userControlService.logged.subscribe(s => this.status = s);
     } 
  
  title = 'ikaruna';


  ngOnInit(): void {
    this.userControlService.checkSession();
    
  }

  

  logout() {
    this.toggleNavbar();
    this.userControlService.logout(this.status)
    .subscribe(r => {
      this.response = r
    });
    //this.cookieSvc.deleteAll();
  }

  toggleNavbar() {
    this.navbarExpand = !this.navbarExpand;
  }

  

}

