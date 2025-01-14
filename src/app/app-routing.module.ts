import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'captureimage',
    pathMatch: 'full'
  },
  {
    path: 'captureimage',
    loadChildren: () => import('./captureimage/captureimage.module').then( m => m.CaptureimagePageModule)
  },
  {
    path: 'displayimage',
    loadChildren: () => import('./displayimage/displayimage.module').then( m => m.DisplayimagePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
