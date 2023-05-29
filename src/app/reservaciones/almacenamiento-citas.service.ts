import {
  Injectable, OnInit
} from '@angular/core';
import { Cita } from './cita.model';
import { FirebaseReservaService } from './firebase-reserva.service';
import { StickyDirection } from '@angular/cdk/table';
import { Usuarios } from './usuario.model';
import { LoginServiceService } from '../login-service.service';

@Injectable({
  providedIn: 'root'
})
export class AlmacenamientoCitasService   {
  private citas: Cita[] = [];
  private usuarioss: Usuarios[]=[]
  constructor(private guadarfire:FirebaseReservaService,private login:LoginServiceService) {
    //this.citas = JSON.parse(localStorage.getItem('citas') || '[]');
    this.guadarfire.cargarCita().subscribe(citas=>{
      console.log(citas);
      this.citas=Object.values(citas);
    })
    this.getUsuarios();
    console.log("hola");
    
  }
  agregarusuario(usu:Usuarios){
    this.login.AgregarAuth(usu.email,usu.pas);
    this.getUsuarios();
    this.usuarioss.push(usu);
    this.guadarfire.guardarusu(this.usuarioss);
  }
  getUsuarios(){
    this.guadarfire.cargarUsuarios().subscribe(Usua=>{
      this.usuarioss=Object.values(Usua);
    })

  }
  getCitas() {
    this.guadarfire.cargarCita().subscribe(citas=>{
      console.log(citas);
      this.citas=Object.values(citas);
    })
    console.log("hola");
    return this.citas;
  }
  //observable para operaciones asincronas
 /* obtenercita(){
    return this.guadarfire.cargarCita();
  }*/

  agregarCita(cita: Cita) {
    this.getCitas();
    this.citas.push(cita);
    this.guadarfire.guardarCitas(this.citas);
    localStorage.setItem('citas', JSON.stringify(this.citas));
  }
  
  nuevaCita(): Cita {
    return {
      id: this.citas.length,
      year: 0,
      mes: 0,
      dia: 0,
      hora: 0,
      paciente: '',
      diaNombre: '',
      mesNombre: '',
      edad: 0
    };
  }

  getCitasFecha(dia: number, mes: number, year: number): Cita[] {
    let citasFecha = this.citas.filter(cita => cita.year == year && cita.mes == mes && cita.dia == dia);
    return citasFecha;
  }
}
