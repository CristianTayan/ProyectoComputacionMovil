import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteItem } from '../../models/cliente-item/cliente-item.interface';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { AlertController } from 'ionic-angular';

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
  
  clienteItem = {} as ClienteItem;
  clienteItemRef$: FirebaseListObservable<ClienteItem[]>

  constructor(public alertCtrl: AlertController, public navCtrl: NavController, public navParams:
     NavParams,  private database: AngularFireDatabase) {
    this.clienteItemRef$ = this.database.list('cliente-list');
  }

  cancelar(){
    this.navCtrl.push('HomePage');
  }
  addCliente(clienteItem: ClienteItem){
    this.clienteItemRef$.push({
      id: this.clienteItem.id,
      apellidos: this.clienteItem.apellidos,
      nombres: this.clienteItem.nombres,
      direccion: this.clienteItem.direccion,
      telefonos: this.clienteItem.telefonos
    });
    this.clienteItem = {} as ClienteItem;
    
    let alert = this.alertCtrl.create({
      title: 'Hecho!',
      subTitle: 'Sus datos se guardaron!',
      buttons: ['OK']
    });
    alert.present();
    // console.log(clienteItem);
    this.navCtrl.push('ClientePage');  
  }


}
