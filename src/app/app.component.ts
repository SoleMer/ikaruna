import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
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
    private cookieSvc: CookieService) {
      userControlService.logged.subscribe(s => this.status = s);
     } 
  
  title = 'ikaruna';

  darkMode: boolean;

  ngOnInit(): void {
    this.userControlService.checkSession();
    this.darkMode = false;
  }

  toggleDarkMode() {
    if(this.darkMode){
      this.darkMode = false;
    } else {
      this.darkMode =true;
    }
  }

  logout() {
    this.toggleNavbar();
    this.userControlService.logout(this.status.id_user)
    .subscribe(r => {
      this.response = r
    });
    this.cookieSvc.deleteAll();
  }

  toggleNavbar() {
    this.navbarExpand = !this.navbarExpand;
  }

  

}

