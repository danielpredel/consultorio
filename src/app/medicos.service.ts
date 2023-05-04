import { Injectable } from '@angular/core';
import { createClient } from 'pexels';

const client = createClient('NSOwiybbHUhhPPj930vyFB124JwsosjX8y21lngC7LSMSOwAoUqenIAk');
const query = 'doctor';

@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  data: any;

  buscarFotos(): void{

    client.photos.search({ query:query, size:"medium", per_page: 15 }).then(photos => {
      this.data = photos;
      this.data = this.data.photos;
      console.log(this.data);
    });
  }

  getData(){
    return this.data;
  }
}
