import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {User} from "../../models/user" ;
import { AngularFireAuth } from "angularfire2/auth"
import { AlertController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  user ={} as User;

  constructor(private afAuth:AngularFireAuth, public alertCtrl: AlertController,
    public navCtrl: NavController, public navParams: NavParams) {
  }

  async login( user: User){
    try{
    const result = this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);  
    console.log(result);
    
    if(result){
      this.navCtrl.setRoot('HomePage');      
    }         
    }catch(e){
      let alert = this.alertCtrl.create({
        title: 'Error!',
        subTitle: 'Datos invalidos!',
        buttons: ['OK']
      });
      alert.present();
      
      this.navCtrl.setRoot('LoginPage');  
    }
  }
  registro(){
      this.navCtrl.push('RegistroPage');
  }

}
