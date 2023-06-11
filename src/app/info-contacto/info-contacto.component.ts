import { Component } from '@angular/core';

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


  enviar():void{
    let body = {
      correo: this.correo,
      asunto: this.asunto,
      descripcion: "Recibimos su mensaje, se atenderá lo antes posible!"
    }


  }
}
