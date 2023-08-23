import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
})
export class TabsPage implements OnInit {
  
  constructor(private router: Router) { }

  ngOnInit() {
  }

  goHomy(){
    this.router.navigate(['/home'])
  }

  goFood(){
    this.router.navigate(['/food'])
  }

  goTraining(){
    this.router.navigate(['/training'])
  }
}
