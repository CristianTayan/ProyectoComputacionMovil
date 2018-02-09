import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from "angularfire2"
import { AngularFireAuthModule } from "angularfire2/auth"
import { AngularFireDatabaseModule } from 'angularfire2/database'
import { MyApp } from './app.component';
import { FIREBASE_CONFIG } from './app.firebase.config';
import { ClienteService } from '../services/cliente.services';
import {AddclientePage } from '../pages/addcliente/addcliente'
import { OficinasService } from '../services/oficina.service';
import { AddoficinaPage } from '../pages/addoficina/addoficina';
import { AddtipocuentaPage } from '../pages/addtipocuenta/addtipocuenta';
import { TipoCuentaService } from '../services/tipoCuenta.service';
import { CuentaService } from '../services/cuenta.service';
import { AddcuentaPage } from '../pages/addcuenta/addcuenta';

@NgModule({
  declarations: [
    MyApp,
    AddclientePage,
    AddoficinaPage,
    AddtipocuentaPage,
    AddcuentaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AddclientePage,
    AddoficinaPage,
    AddtipocuentaPage,
    AddcuentaPage
    

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
     ClienteService,
     OficinasService,
     TipoCuentaService,
     CuentaService

  ]
})
export class AppModule {}
