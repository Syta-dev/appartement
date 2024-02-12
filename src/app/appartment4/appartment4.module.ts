import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Appartment4PageRoutingModule } from './appartment4-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Appartment4Page } from './appartment4.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Appartment4PageRoutingModule
  ],
  declarations: [Appartment4Page]
})
export class Appartment4PageModule {}
