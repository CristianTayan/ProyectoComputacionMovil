import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class TipoCuentaService{
    constructor(public afDB: AngularFireDatabase){

}
tipoCuentas = [];
public gettipoCuentas(){
    return this.afDB.list('tipocuenta/').valueChanges();
 }
 public gettipoCuenta(id){
    return this.afDB.object('tipocuenta/'+ id).valueChanges();        
 }
 public creartipoCuenta(tipoCuenta){
     this.afDB.database.ref('tipocuenta/'+ tipoCuenta.id).set(tipoCuenta);
 }
 public editartipoCuenta(tipoCuenta){

     this.afDB.database.ref('tipocuenta/'+ tipoCuenta.id).set(tipoCuenta);    
 }

 public deletetipoCuenta(tipoCuenta){

     this.afDB.database.ref('tipocuenta/'+ tipoCuenta.id).remove();
       
 }
}