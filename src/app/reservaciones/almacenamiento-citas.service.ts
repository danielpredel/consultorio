import {
  Injectable, OnInit
} from '@angular/core';
import { Cita } from './cita.model';
import { FirebaseReservaService } from './firebase-reserva.service';
import { StickyDirection } from '@angular/cdk/table';
import { Usuarios } from './usuario.model';
import { LoginServiceService } from '../login-service.service';
import {
  getDatabase,
  ref,
  set
} from "firebase/database";
// import { uuid } from 'uuidv4';
import {
  v4 as uuidv4
} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AlmacenamientoCitasService   {
  private citas: Cita[] = [];
  private filtroCitas: Cita[] = [];
  private usuarioss: Usuarios[]=[]
  constructor(private guadarfire:FirebaseReservaService,private login:LoginServiceService) {
    //this.citas = JSON.parse(localStorage.getItem('citas') || '[]');
    /*this.guadarfire.cargarCita().subscribe(citas=>{
      
      this.citas=Object.values(citas);
      console.log(this.citas);
    })*/
    this.getUsuarios();
    console.log("hola");
    
  }
  agregarusuario(usu:Usuarios){
    // this.login.AgregarAuth(usu.email,usu.pas);
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
      this.citas.forEach(element => {
        if(element != null){
          this.filtroCitas.push(element);
        }
      });
    })
    console.log('Citas');
    console.log(this.citas);
    console.log('Filtro');
    console.log(this.filtroCitas);
    return this.filtroCitas;
  }
  //observable para operaciones asincronas
 /* obtenercita(){
    return this.guadarfire.cargarCita();
  }*/

  agregarCita(cita: Cita) {
    this.getCitas();
    // this.citas.push(cita);
    this.filtroCitas.push(cita);
    // this.guadarfire.guardarCitas(this.citas);
    this.guadarfire.guardarCitas(this.filtroCitas);
    localStorage.setItem('citas', JSON.stringify(this.filtroCitas));
    setTimeout(() =>{
      console.log("Hola Mundo");
      this.getCitas();
    }, 1000);
    
  }
  
  nuevaCita(): Cita {
    return {
      id: this.login.usuariolog,
      year: 0,
      mes: 0,
      dia: 0,
      hora: 0,
      paciente: '',
      diaNombre: '',
      mesNombre: '',
      edad: 0,
      doctor: ''
    };
  }

  getCitasFecha(dia: number, mes: number, year: number): Cita[] {
    // let citasFecha = this.citas.filter(cita => cita.year == year && cita.mes == mes && cita.dia == dia);
    let citasFecha = this.filtroCitas.filter(cita => cita.year == year && cita.mes == mes && cita.dia == dia);
    return citasFecha;
  }

  // Nuevo Metodo Insercion De citas
  setNuevaCitaDB(nuevaCita: Cita){
    let randomID = uuidv4();
    // let nuevaCita: Cita = {
    //   id: 'udnakda98dabhjkas8f7asf',
    //   year: 2023,
    //   mes: 7,
    //   dia: 17,
    //   hora: 9,
    //   paciente: 'Daniel',
    //   diaNombre: 'Martes',
    //   mesNombre: 'Julio',
    //   edad: 23,
    //   doctor: 'Meredith Gray'
    // }
  
    var database = getDatabase();
      set(ref(database, 'citas/' + randomID), nuevaCita);
  }


}
