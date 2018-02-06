import {Injectable} from '@angular/core';

@Injectable()
export class ClienteService{
    clientes = [{
        id:1002846986, 
        apellidos:"Tayan",
        nombres: "Cristian",
        direccion: "Yahuarcocha",
        telefonos: "0999977530"
       },
       {
        id:1002846987, 
        apellidos:"Pinto",
        nombres: "Beatriz",
        direccion: "Yahuarcocha",
        telefonos: "0999977530"
       },
       {
        id:1002846988, 
        apellidos:"Paez",
        nombres: "Daniel",
        direccion: "Yahuarcocha",
        telefonos: "0999977530"
       }];

       public getClientes(){
          return this.clientes;
       }
    public getCliente(id){
        return this.clientes.filter(function(e, i){return e.id == id})[0] || {id: null, apellidos: null, nombres: null, direccion: null, telefonos: null};
    }
}