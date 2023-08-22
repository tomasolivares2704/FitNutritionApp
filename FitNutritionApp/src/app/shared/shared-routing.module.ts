import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharedPage } from './shared.page';

const routes: Routes = [
  {
    path: '',
    component: SharedPage
  },
  {
    path: 'componentes',
    loadChildren: () => import('./componentes/componentes.module').then( m => m.ComponentesPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SharedPageRoutingModule {}
