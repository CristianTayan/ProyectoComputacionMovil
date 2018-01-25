import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddclientePage } from './addcliente';

@NgModule({
  declarations: [
    AddclientePage,
  ],
  imports: [
    IonicPageModule.forChild(AddclientePage),
  ],
})
export class AddclientePageModule {}
