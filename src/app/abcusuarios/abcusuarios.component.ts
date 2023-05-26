import { Component } from '@angular/core';
import swal  from 'sweetalert';
import { FirebaseReservaService } from '../reservaciones/firebase-reserva.service';
import { AlmacenamientoCitasService } from '../reservaciones/almacenamiento-citas.service';
import { Usuarios } from '../reservaciones/usuario.model';
@Component({
  selector: 'app-abcusuarios',
  templateUrl: './abcusuarios.component.html',
  styleUrls: ['./abcusuarios.component.css']
})

export class ABCUsuariosComponent {
  nombre:string="";
  email:string="";
  pass:string="";
  telefono:string="";
  
  constructor(private guadarfire:FirebaseReservaService,private alma:AlmacenamientoCitasService){}
    altausuario(){
      //alert(this.nombre+" "+this.email+" "+this.pass+" "+this.telefono);
      if(this.nombre!=""&&this.email!=""&&this.pass!=""&&this.telefono!=""){
        let aux=this.nuevoUsuario();
        this.alma.agregarusuario(aux);
        swal("Usuario Registrado", "Excelente datos guardados", "success");
      }else{
        swal("Campos vacios", "vuelve a intentar", "error");
      }
    }
    nuevoUsuario(): Usuarios {
      return {
        nombre:this.nombre,
        email:this.email,
        pas:this.pass,
        tel:this.telefono,
      };
    }
}
