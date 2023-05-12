import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createClient } from 'pexels';

const client = createClient('NSOwiybbHUhhPPj930vyFB124JwsosjX8y21lngC7LSMSOwAoUqenIAk');


@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  fotos: any;
  myData: any;

  constructor(private http: HttpClient){
    this.http.get('assets/medicamentos.json').subscribe(data => {
      this.myData = data;
    });
  }

  buscarFotos(query: string, cant: number): void{

    client.photos.search({ query:query, size:"medium", per_page: cant }).then(photos => {
      this.fotos = photos;
      this.fotos = this.fotos.photos;
      console.log(this.fotos);
    });
  }

  getFotos(){
    return this.fotos;
  }

  getMedicinas(){
    return this.myData;
  }
}
