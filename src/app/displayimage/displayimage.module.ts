import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DisplayimagePageRoutingModule } from './displayimage-routing.module';

import { DisplayimagePage } from './displayimage.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DisplayimagePageRoutingModule
  ],
  declarations: [DisplayimagePage]
})
export class DisplayimagePageModule {}
