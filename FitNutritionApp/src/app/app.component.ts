import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'paper-plane' },
    { title: 'Food', url: 'food', icon: 'heart' },
    { title: 'Training', url: '/training', icon: 'archive' },
    
  ];
  public labels = [];
  constructor() {}
}
