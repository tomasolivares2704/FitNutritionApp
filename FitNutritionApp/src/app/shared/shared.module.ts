import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedPageRoutingModule } from './shared-routing.module';

import { SharedPage } from './shared.page';

import {ComponentesPageModule} from './componentes/componentes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageRoutingModule,
    ComponentesPageModule,
  ],
  declarations: [SharedPage]
})
export class SharedPageModule {}
