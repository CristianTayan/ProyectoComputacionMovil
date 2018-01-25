import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AddtipocuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addtipocuenta',
  templateUrl: 'addtipocuenta.html',
})
export class AddtipocuentaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddtipocuentaPage');
  }
  registroTipoCuenta(){
    this.navCtrl.push('AddtipocuentaPage');
}
cancelar(){
  this.navCtrl.push('HomePage');
}

}
