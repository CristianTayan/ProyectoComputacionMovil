import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OficinasService } from '../../services/oficina.service';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AddoficinaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-addoficina',
  templateUrl: 'addoficina.html',
})
export class AddoficinaPage {
  oficina = {id:null, descripcion: null, ciudad: null, direccion: null, telefonos: null};
  id = null;
  constructor(public alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams, public oficinasService: OficinasService) {
    this.id = navParams.get('id');
    if (this.id != 0){
    this.oficina = oficinasService.getOficina(this.id);  
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddoficinaPage');
  }
  cancelar(){
    this.navCtrl.push('HomePage');
  }

  addOficina(){
    if (this.id != 0){
      this.oficinasService.editarOficina(this.oficina);
      let alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Cambios con exito :)!',
        buttons: ['OK']
      });
      alert.present();
    }else{
      this.oficina.id = Date.now();
      this.oficinasService.crearOficina(this.oficina);
      let alert = this.alertCtrl.create({
        title: 'Ok!',
        subTitle: 'Creado con exito :)!',
        buttons: ['OK']
      });
      alert.present();
    } 
    this.navCtrl.pop();       
  }

  deleteOficina(){
    this.oficinasService.deleteOficina(this.oficina);
    let alert = this.alertCtrl.create({
      title: 'Ok!',
      subTitle: 'Eliminado con exito :)!',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.pop();
  }
}
