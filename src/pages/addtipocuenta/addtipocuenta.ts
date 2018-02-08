import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { TipoCuentaService } from '../../services/tipoCuenta.service';
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
  tipoCuenta = {};
  id = null;
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
  public tipoCuentaService: TipoCuentaService) {
    if (this.id != null){
      tipoCuentaService.gettipoCuenta(this.id).subscribe(tipoCuenta => {
        this.tipoCuenta = tipoCuenta;
      })  
    }
  }

cancelar(){
  this.navCtrl.push('HomePage');
}
addtipoCuenta(){
  if (this.id != null){
    this.tipoCuentaService.editartipoCuenta(this.tipoCuenta);
    let alert = this.alertCtrl.create({
      title: 'Ok!',
      subTitle: 'Cambios con exito :)!',
      buttons: ['OK']
    });
    alert.present();
  }else{
    this.tipoCuenta.id = Date.now();
    this.tipoCuentaService.creartipoCuenta(this.tipoCuenta);
    let alert = this.alertCtrl.create({
      title: 'Ok!',
      subTitle: 'Creado con exito :)!',
      buttons: ['OK']
    });
    alert.present();
  } 
  this.navCtrl.pop();       
}

deletetipoCuenta(){
  this.tipoCuentaService.deletetipoCuenta(this.tipoCuenta);
  let alert = this.alertCtrl.create({
    title: 'Ok!',
    subTitle: 'Eliminado con exito :)!',
    buttons: ['OK']
  });
  alert.present();
  this.navCtrl.pop();
}

}
