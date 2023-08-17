import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Food', url: 'food', icon: 'fast-food' },
    { title: 'Training', url: '/training', icon: 'barbell' },
    
  ];
  public labels = [];
  constructor() {}
}
