import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'appartment1',
    loadChildren: () => import('./appartment1/appartment1.module').then( m => m.Appartment1PageModule)
  },
  {
    path: 'appartment2',
    loadChildren: () => import('./appartment2/appartment2.module').then( m => m.Appartment2PageModule)
  },
  {
    path: 'appartment3',
    loadChildren: () => import('./appartment3/appartment3.module').then( m => m.Appartment3PageModule)
  },
  {
    path: 'appartment4',
    loadChildren: () => import('./appartment4/appartment4.module').then( m => m.Appartment4PageModule)
  },
  {
    path: 'appartment5',
    loadChildren: () => import('./appartment5/appartment5.module').then( m => m.Appartment5PageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
