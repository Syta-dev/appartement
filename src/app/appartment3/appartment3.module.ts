import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Appartment3PageRoutingModule } from './appartment3-routing.module';

import { Appartment3Page } from './appartment3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Appartment3PageRoutingModule
  ],
  declarations: [Appartment3Page]
})
export class Appartment3PageModule {}
