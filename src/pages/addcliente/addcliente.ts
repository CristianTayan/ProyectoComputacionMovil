import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ClienteService} from "../../services/cliente.services"
/**
 * Generated class for the AddclientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addcliente',
  templateUrl: 'addcliente.html',
})
export class AddclientePage {
  cliente = {};
  id = null;

  constructor( public alertCtrl: AlertController, public navCtrl: NavController, public navParams:
     NavParams, public clienteServices: ClienteService) {  
      this.id = navParams.get('id'); 
      if (this.id != 0){
        clienteServices.getCliente(this.id).subscribe(cliente => {
          this.cliente = cliente;
        });  
      }
  }

  cancelar(){
    this.navCtrl.push('HomePage');
  }
  addCliente(){
    if (this.id != 0){
      this.clienteServices.editarCliente(this.cliente);
      let alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Cambios con exito :)!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.cliente.id = Date.now();
      this.clienteServices.crearCliente(this.cliente);
      let alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Creado con exito :)!',
        buttons: ['OK']
      });
      alert.present();
    } 
    this.navCtrl.pop();       
  }

  deleteCliente(){
    this.clienteServices.deleteCliente(this.cliente);
    let alert = this.alertCtrl.create({
      title: 'Ok!',
      subTitle: 'Eliminado con exito :)!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }

}
