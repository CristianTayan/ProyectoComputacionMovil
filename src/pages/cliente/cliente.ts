import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../services/cliente.services';
import { ViewChild } from '@angular/core/src/metadata/di';
import { AddclientePage } from '../addcliente/addcliente'
// import { AddclientePage } from '../addcliente/addcliente' 
// import {  AngularFireDatabase } from 'angularfire2/database';
// import { FirebaseListObservable } from 'angularfire2/database-deprecated';
// import { ClienteItem } from '../../models/cliente-item/cliente-item.interface';
/**
 * Generated class for the ClientePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cliente',
  templateUrl: 'cliente.html',
})
export class ClientePage {
   clientes = [];
   @ViewChild('myNav') nav: NavController
    constructor(public navCtrl: NavController, public navParams: NavParams, public clienteService: ClienteService) {
      this.clientes = clienteService.getClientes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }
  
  registroCliente(id){
    this.navCtrl.push(AddclientePage, {id:id});
}

}
