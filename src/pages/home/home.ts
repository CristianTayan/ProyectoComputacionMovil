import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth'

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(private afAuth: AngularFireAuth, private toast:ToastController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.afAuth.authState.subscribe(data => {
      if(data && data.email && data.uid){
        this.toast.create({
          message:"Bienvenido a Banca, " + data.email,
          duration: 3000
        }).present();
      }
      else{
        this.toast.create({
          message:'No se encuentra registro',
          duration: 3000
        }).present();
      }
    });

  }

  goToCliente(){
    this.navCtrl.push('ClientePage');
  }
  goToOficina(){
    this.navCtrl.push('OficinaPage');
  }
  goToCuenta(){
    this.navCtrl.push('CuentaPage');
  }
  goToTipoCuenta(){
    this.navCtrl.push('TipoCuentaPage');
  }

  cerrarSesion(){
    this.navCtrl.push('LoginPage');
  }

}
