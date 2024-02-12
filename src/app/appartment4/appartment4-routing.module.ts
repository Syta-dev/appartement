import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Appartment4Page } from './appartment4.page';

const routes: Routes = [
  {
    path: '',
    component: Appartment4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Appartment4PageRoutingModule {}
