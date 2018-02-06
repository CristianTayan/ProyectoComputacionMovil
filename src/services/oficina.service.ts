import {Injectable} from '@angular/core';

@Injectable()
    export class OficinasService{
        oficinas = [
            {id:1, descripcion:'Agencia Ibarra', ciudad:'Ibarra', direccion:'Mariano acosta', telefonos:'09999'},
            {id:2, descripcion:'Agencia Atuntaqui', ciudad:'Ibarra', direccion:'Mariano acosta', telefonos:'09999'}  
        ];

    public getOficinas(){
        return this.oficinas;
    }
    public getOficina(id){
        return this.oficinas.filter(function(e, i){return e.id == id})[0] || {id: null, descripcion: null, ciudad: null, direccion: null, telefonos: null};
    }
    public crearOficina(oficina){
        this.oficinas.push(oficina);
    }
    public editarOficina(oficina){
        for(let i = 0; i < this.oficinas.length; i++ ){
            if (this.oficinas[i] == oficina.id){
                this.oficinas[i] = oficina;
            }
        }
    }

    public deleteOficina(oficina){
        for(let i = 0; i < this.oficinas.length; i++ ){
            if (this.oficinas[i].id == oficina.id){
                this.oficinas.splice(i, 1);
            }
        }   
    }
}