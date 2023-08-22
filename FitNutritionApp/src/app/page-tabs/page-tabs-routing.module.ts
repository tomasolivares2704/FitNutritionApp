import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageTabsPage } from './page-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: PageTabsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageTabsPageRoutingModule {}
