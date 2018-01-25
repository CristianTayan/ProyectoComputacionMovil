import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TipoCuentaPage');
  }
  registroTipoCuenta(){
    this.navCtrl.push('AddtipocuentaPage');
}

}
