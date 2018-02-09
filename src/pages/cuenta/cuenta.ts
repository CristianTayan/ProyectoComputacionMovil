import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddcuentaPage } from '../addcuenta/addcuenta';
import { CuentaService } from '../../services/cuenta.service';

/**
 * Generated class for the CuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cuenta',
  templateUrl: 'cuenta.html',
})
export class CuentaPage {
  cuentas = [];
  @ViewChild('myNav') nav: NavController;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  public cuentaService: CuentaService) {
    cuentaService.getCuentas()
      .subscribe(cuentas => {
        this.cuentas = cuentas;
      });
  }
  
  public registroCuenta(id){
    this.navCtrl.push(AddcuentaPage, {id:id});
  }
  public crearCuenta(){
    this.navCtrl.push(AddcuentaPage, {id:0})
  }

}
