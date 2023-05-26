import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from './cita.model';
import { LoginServiceService } from '../login-service.service';
import { Usuarios } from './usuario.model';

@Injectable({
  providedIn: 'root'
})
export class FirebaseReservaService {

  constructor(private httpClient:HttpClient,private login:LoginServiceService) { }
  guardarCitas(Citas:Cita[]){
    this.httpClient.put("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json",Citas).subscribe(
      Response=>console.log("exito :)"),
      error=>console.log("error"+error),

    );
    
  }
  guardarusu(usu:Usuarios[]){
    this.httpClient.put("https://consultorio-3f786-default-rtdb.firebaseio.com/Usuarios.json",usu).subscribe(
      Response=>console.log("Guardado Base :)"),
      error=>console.log("error"+error),

    );
  }
  
  cargarCita(){
    const token=this.login.getidtoken();
      return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json");
  }
  cargarUsuarios(){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/Usuarios.json");
  }
}
