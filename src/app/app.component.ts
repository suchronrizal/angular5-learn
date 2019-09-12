import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  goals: [];
  arrComponent: Object = {};
  addItem = () => {
    this.arrComponent = this.goals.length;
  };
}
