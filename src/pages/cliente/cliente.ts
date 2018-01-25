import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddclientePage } from '../addcliente/addcliente' 
import {  AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { ClienteItem } from '../../models/cliente-item/cliente-item.interface';
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
  clienteListRef$: FirebaseListObservable<ClienteItem[]>

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private database: AngularFireDatabase) {
    this.clienteListRef$ = this.database.list('cliente-list');
    // this.clienteListRef$.subscribe(x => console.log(x));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientePage');
  }
  
  registroCliente(){
    this.navCtrl.push('AddclientePage');
}

}
