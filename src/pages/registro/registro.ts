import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { AngularFireAuth } from "angularfire2/auth"
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  user = {} as User;

  constructor(private afAuth:AngularFireAuth, public alertCtrl: AlertController,
    
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async registro(user: User){
    try{
    const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password);
    console.log(result);
      let alert = this.alertCtrl.create({
        title: 'Hecho!',
        subTitle: 'Sus datos se guardaron!',
        buttons: ['OK']
      });
      alert.present();
         
    }catch(e){
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Estos datos ya existen!',
        buttons: ['OK']
      });
      alert.present();
      
    }
  }
}
