import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TipoCuentaPage } from './tipo-cuenta';

@NgModule({
  declarations: [
    TipoCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(TipoCuentaPage),
  ],
})
export class TipoCuentaPageModule {}
