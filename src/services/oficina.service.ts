import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
// import { Observable } from 'rxjs/Observable';

@Injectable()
    export class OficinasService{
        constructor(public afDB: AngularFireDatabase){

    }
    oficinas = [];

    public getOficinas(){
       // return this.oficinas;
       return this.afDB.list('oficina/').valueChanges();
    }
    public getOficina(id){
       return this.afDB.object('oficina/'+ id).valueChanges();        
        //return this.oficinas.filter(function(e, i){return e.id == id})[0] || {id: null, descripcion: null, ciudad: null, direccion: null, telefonos: null};
    }
    public crearOficina(oficina){
        this.afDB.database.ref('oficina/'+ oficina.id).set(oficina);
        //this.oficinas.push(oficina);
    }
    public editarOficina(oficina){
        // for(let i = 0; i < this.oficinas.length; i++ ){
        //     if (this.oficinas[i] == oficina.id){
        //         this.oficinas[i] = oficina;
        //     }
        // }
        this.afDB.database.ref('oficina/'+ oficina.id).set(oficina);    
    }

    public deleteOficina(oficina){
        // for(let i = 0; i < this.oficinas.length; i++ ){
        //     if (this.oficinas[i].id == oficina.id){
        //         this.oficinas.splice(i, 1);
        //     }
        // } 
        this.afDB.database.ref('oficina/'+ oficina.id).remove();
          
    }
}