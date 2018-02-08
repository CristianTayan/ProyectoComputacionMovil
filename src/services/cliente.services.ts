import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Injectable()
export class ClienteService{
    constructor(public afDB: AngularFireDatabase){

    }
    clientes = [];

       public getClientes(){
        return this.afDB.list('cliente/').valueChanges();
       }
    public getCliente(id){
        return this.afDB.object('cliente/'+ id).valueChanges();        
    }
    public crearCliente(cliente){
        this.afDB.database.ref('cliente/'+ cliente.id).set(cliente);
        //this.clientes.push(cliente);
    }
    public editarCliente(cliente){
        // for(let i = 0; i < this.clientes.length; i++ ){
        //     if (this.clientes[i] == cliente.id){
        //         this.clientes[i] = cliente;
        //     }
        // }
        this.afDB.database.ref('cliente/'+ cliente.id).set(cliente);    
    }

    public deleteCliente(cliente){
        // for(let i = 0; i < this.oficinas.length; i++ ){
        //     if (this.oficinas[i].id == oficina.id){
        //         this.oficinas.splice(i, 1);
        //     }
        // } 
        this.afDB.database.ref('cliente/'+ cliente.id).remove();
          
    }
}