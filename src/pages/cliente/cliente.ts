import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ClienteService } from '../../services/cliente.services';
import { AddclientePage } from '../addcliente/addcliente';
import { Observable } from 'rxjs/Observable';
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
   @ViewChild('myNav') nav: NavController;
    constructor(public navCtrl: NavController, public navParams: NavParams, public clienteService: ClienteService) {
      clienteService.getClientes().subscribe(clientes => {
        this.clientes = clientes;
      });
  }

  
  registroCliente(id){
    this.navCtrl.push(AddclientePage, {id:id});
  }
  public crearCliente(){
    this.navCtrl.push(AddclientePage, {id:0});   
  }

}
