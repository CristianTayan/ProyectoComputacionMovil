import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
    export class CuentaService{
    constructor(public afDB: AngularFireDatabase){
    }
    cuentas = [];
    clientes = [];
    oficinas =[];
    tipoCuentas = [];
    
    public getOficinas(){
        return this.afDB.list('oficinas/').valueChanges();
    }
    
    public getClientes(){
        return this.afDB.list('clientes/').valueChanges();
    }
    public getTipoCuentas(){
        return this.afDB.list('tipocuenta/').valueChanges();
    }
    public getCuentas(){
        return this.afDB.list('cuenta/').valueChanges();
    }
    public getCuenta(id){
        return this.afDB.object('cuenta/'+ id).valueChanges();        
     }
     public crearCuenta(cuenta){
         this.afDB.database.ref('cuenta/'+ cuenta.id).set(cuenta);
     }
     public editarCuenta(cuenta){
         this.afDB.database.ref('cuenta/'+ cuenta.id).set(cuenta);    
     }
 
     public deleteCuenta(cuenta){ 
         this.afDB.database.ref('cuenta/'+ cuenta.id).remove();
           
     }
 }