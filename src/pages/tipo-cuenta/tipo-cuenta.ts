import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { TipoCuentaService } from '../../services/tipoCuenta.service';
import { AddtipocuentaPage } from '../addtipocuenta/addtipocuenta';

/**
 * Generated class for the TipoCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tipo-cuenta',
  templateUrl: 'tipo-cuenta.html',
})
export class TipoCuentaPage {
  tipoCuentas = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams
  ,public tipoCuentaService: TipoCuentaService) {
    tipoCuentaService.gettipoCuentas()
      .subscribe(tipoCuentas =>{
      this.tipoCuentas = tipoCuentas;
    });
  }

  registrotipoCuenta(id){
    this.navCtrl.push(AddtipocuentaPage, {id:id});
  }
  creartipoCuenta(){
    this.navCtrl.push(AddtipocuentaPage, {id:0})
  }

}
