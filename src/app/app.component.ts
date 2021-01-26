import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ikaruna';

  darkMode: boolean;

  ngOnInit(): void {
    this.darkMode = false;
  }

  toggleDarkMode() {
    if(this.darkMode){
      this.darkMode = false;
    } else {
      this.darkMode =true;
    }
    console.log(this.darkMode);
  }




}

