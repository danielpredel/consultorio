import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from './cita.model';
import { LoginServiceService } from '../login-service.service';
import { Usuarios } from './usuario.model';
import {
  getDatabase,
  ref,
  set
} from "firebase/database";

@Injectable({
  providedIn: 'root'
})
export class FirebaseReservaService {

  constructor(private httpClient:HttpClient) { }
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
  buscarnum(numero:string){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/Usuarios.json?orderBy=%22telefono%22&equalTo=%22"+numero+"%22")
  }
  vernom(quien:string){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/Usuarios/"+quien+"/nombre.json");
  }
  citasde(quien:string){
    console.log("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json?orderBy=%22id%22&equalTo=%22"+quien+"%22")
    //return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json?orderBy=%22id%22&equalTo="+quien);
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json?orderBy=%22id%22&equalTo=%22"+quien+"%22");
  }
  
  cargarCita(){
      return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json");
  }
  cargarUsuarios(){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/Usuarios.json");
  }
  cargarJunio(){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json?orderBy=%22mesNombre%22&equalTo=%22Junio%22")
  }
  cargarJulio(){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json?orderBy=%22mesNombre%22&equalTo=%22Julio%22")
  }
  cargarAgosto(){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json?orderBy=%22mesNombre%22&equalTo=%22Agosto%22")
  }
  cargarSeptiembre(){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json?orderBy=%22mesNombre%22&equalTo=%22Septiembre%22")
  }
  cargarOctubre(){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json?orderBy=%22mesNombre%22&equalTo=%22Octubre%22")
  }
  cargarNoviembre(){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json?orderBy=%22mesNombre%22&equalTo=%22Noviembre %22")
  }
  cargarDiciembre(){
    return this.httpClient.get("https://consultorio-3f786-default-rtdb.firebaseio.com/citas.json?orderBy=%22mesNombre%22&equalTo=%22Diciembre%22")
  }

  

  // // Nuevo Metodo Insercion De citas
  // setNuevaCitaDB(){
  //   let randomID = '1209821n2198c84s0104812384b234';
  //   let nuevaCita: Cita = {
  //     id: 'udnakda98dabhjkas8f7asf',
  //     year: 2023,
  //     mes: 7,
  //     dia: 17,
  //     hora: 9,
  //     paciente: 'Daniel',
  //     diaNombre: 'Martes',
  //     mesNombre: 'Julio',
  //     edad: 23,
  //     doctor: 'Meredith Gray'
  //   }
  
  //   var database = getDatabase();
  //     set(ref(database, 'Citas/' + randomID), nuevaCita);
  // }
}
