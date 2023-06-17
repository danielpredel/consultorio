import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodigoqrService {

  myData:any;

  constructor(private http: HttpClient) {}

  recuperaDatos(index:any){
    return this.http.get('http://localhost:3000/api/codigoqr',index).toPromise();
  }

  borrarCita(index:any){
    this.http.delete('https://consultorio-3f786-default-rtdb.firebaseio.com/Usuarios.json', index).toPromise();
  }
}
