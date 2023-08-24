import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage {

  constructor(private router: Router) {}

  changeTab(tab: string) {
    if (tab === 'food') {
      this.router.navigate(['/food']);
    } else if (tab === 'home') {
      this.router.navigate(['/home']);
    } else if (tab === 'training') {
      this.router.navigate(['/training']);
    }
  }
}
