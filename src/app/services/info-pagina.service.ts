import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina  = {};
  cargada = false;

  constructor( private htpp: HttpClient) { 

    console.log('Info pagina cargada');

    //leer archivo json

    this.htpp.get('assets/data/data-pagina.json')
    .subscribe( (resp: InfoPagina) => {

      //hay formas para buscar (resp: any)
      this.cargada=true;
      this.info =resp;

      console.log(resp);
      //console.log( resp['twitter'] );
    
    });


  }
}
