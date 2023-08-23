import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SharedPageRoutingModule } from './shared-routing.module';

import {TabsPage} from './componentes/tabs/tabs.page';



@NgModule({

  declarations: [
    TabsPage
  ],

  exports: [ 
    TabsPage
  ],

  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedPageRoutingModule,
  ],

  
})
export class SharedPageModule {}
