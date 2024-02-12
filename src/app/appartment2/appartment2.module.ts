import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Appartment2PageRoutingModule } from './appartment2-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Appartment2Page } from './appartment2.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Appartment2PageRoutingModule
  ],
  declarations: [Appartment2Page]
})
export class Appartment2PageModule {}
