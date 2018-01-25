import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OficinaPage } from './oficina';

@NgModule({
  declarations: [
    OficinaPage,
  ],
  imports: [
    IonicPageModule.forChild(OficinaPage),
  ],
})
export class OficinaPageModule {}
