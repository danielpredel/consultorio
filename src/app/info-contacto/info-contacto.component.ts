import { Component } from '@angular/core';
import { ApiCorreoService } from '../api-correo.service';

@Component({
  selector: 'app-info-contacto',
  templateUrl: './info-contacto.component.html',
  styleUrls: ['./info-contacto.component.css']
})
export class InfoContactoComponent {
  correo!: string;
  asunto!: string;
  comentario!: string;
  confirmarEnvio:boolean=false;

  constructor(private servicioCorreo: ApiCorreoService) { }
  enviar():void{
    let body = {
      correo: this.correo,
      asunto: this.asunto,
      descripcion: this.comentario
    }
    this.servicioCorreo.enviarCorreo("https://consultorio.fly.dev/api/correo", body)
    .then((data) => {
      console.log(data);
      this.confirmarEnvio=true;
    })
    .catch((err) => {
      console.log(err);
    });

  }
}
