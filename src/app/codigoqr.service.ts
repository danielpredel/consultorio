import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CodigoqrService {

  myData:any;

  constructor(private http: HttpClient) {}

  recuperaDatos(body:any){
    return this.http.post('http://localhost:3000/api/codigoqr',body).toPromise();
  }
}
