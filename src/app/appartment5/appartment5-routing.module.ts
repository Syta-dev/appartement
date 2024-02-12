import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Appartment5Page } from './appartment5.page';

const routes: Routes = [
  {
    path: '',
    component: Appartment5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Appartment5PageRoutingModule {}
