import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { CuentaService } from '../../services/cuenta.service';
/**
 * Generated class for the AddcuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcuenta',
  templateUrl: 'addcuenta.html',
})
export class AddcuentaPage {
  cuenta = {id:null, numero:null, tipocuenta:null,cliente:null, oficina:null, fecha:null, saldo:null};
  id= null;
  tipoCuentas=[];
  clientes=[];
  oficinas=[];
  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams,
  public cuentaService: CuentaService) {
    this.id = navParams.get('id');
    if(this.id != 0 ){
      cuentaService.getCuenta(this.id)
      .subscribe(cuenta => {
        this.cuenta = cuenta;
      });
    }
    cuentaService.getTipoCuentas().subscribe(tipoCuentas =>{
      this.tipoCuentas = tipoCuentas;  
    });
    cuentaService.getClientes().subscribe(clientes =>{
      this.clientes = clientes;  
    });
    cuentaService.getOficinas().subscribe(oficinas =>{
      this.oficinas = oficinas; 
    });
  }

  addCuenta(){
    if (this.id != 0){
      this.cuentaService.editarCuenta(this.cuenta);
      let alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Cambios con exito :)!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.cuenta.id = Date.now();
      this.cuentaService.crearCuenta(this.cuenta);
      let alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Creado con exito :)!',
        buttons: ['OK']
      });
      alert.present();
    } 
    this.navCtrl.pop();       
  }

  deleteCuenta(){
    this.cuentaService.deleteCuenta(this.cuenta);
    let alert = this.alertCtrl.create({
      title: 'Ok!',
      subTitle: 'Eliminado con exito :)!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }

}
