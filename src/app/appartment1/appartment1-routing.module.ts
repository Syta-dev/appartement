import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Appartment1Page } from './appartment1.page';

const routes: Routes = [
  {
    path: '',
    component: Appartment1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Appartment1PageRoutingModule {}
