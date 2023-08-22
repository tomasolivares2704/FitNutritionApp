import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComponentesPageRoutingModule } from './componentes-routing.module';

import { ComponentesPage } from './componentes.page';

import {TabsPageModule} from './tabs/tabs.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentesPageRoutingModule,
    TabsPageModule
  ],
  declarations: [ComponentesPage]
})
export class ComponentesPageModule {}
