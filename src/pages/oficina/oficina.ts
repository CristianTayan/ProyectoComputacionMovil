import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OficinasService } from '../../services/oficina.service';
import { AddoficinaPage } from '../addoficina/addoficina';

/**
 * Generated class for the OficinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oficina',
  templateUrl: 'oficina.html',
})
export class OficinaPage {
  oficinas = [];
  @ViewChild('myNav') nav: NavController
  constructor(public navCtrl: NavController, public navParams: NavParams
  , public oficinaService: OficinasService) {
    this.oficinas = oficinaService.getOficinas();
  }

  public registroOficina(id){
    this.navCtrl.push(AddoficinaPage, {id:id});
  }
  public crearOficina(){
    this.navCtrl.push(AddoficinaPage, {id:0});
    
  }


}
