import { Component } from '@angular/core';
import { Usuarios } from '../reservaciones/usuario.model';
import { FirebaseReservaService } from '../reservaciones/firebase-reserva.service';

@Component({
  selector: 'app-mostrar-usua',
  templateUrl: './mostrar-usua.component.html',
  styleUrls: ['./mostrar-usua.component.css']
})
export class MostrarUsuaComponent {
  usuarios:Usuarios[]=[];
  constructor(private servicioFire:FirebaseReservaService){
    this.servicioFire.cargarUsuarios().subscribe(usu=>{
      this.usuarios=Object.values(usu);
    })
  }
  /**
   this.guadarfire.cargarCita().subscribe(citas=>{
      console.log(citas);
      this.citas=Object.values(citas);
    })
   */

}

