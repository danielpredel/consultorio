import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCorreoService {

  constructor(private http: HttpClient) { }
  enviarCorreo(url: string, body: any) {
    return this.http.post(url, body).toPromise();
  }
}
