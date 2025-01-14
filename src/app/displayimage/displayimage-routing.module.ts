import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayimagePage } from './displayimage.page';

const routes: Routes = [
  {
    path: '',
    component: DisplayimagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DisplayimagePageRoutingModule {}
