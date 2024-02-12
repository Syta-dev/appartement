import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Appartment2Page } from './appartment2.page';

const routes: Routes = [
  {
    path: '',
    component: Appartment2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Appartment2PageRoutingModule {}
