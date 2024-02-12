import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Appartment5PageRoutingModule } from './appartment5-routing.module';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Appartment5Page } from './appartment5.page';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Appartment5PageRoutingModule
  ],
  declarations: [Appartment5Page]
})
export class Appartment5PageModule {}
