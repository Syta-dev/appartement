import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Appartment1PageRoutingModule } from './appartment1-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Appartment1Page } from './appartment1.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Appartment1PageRoutingModule
  ],
  declarations: [Appartment1Page]
})
export class Appartment1PageModule {}
