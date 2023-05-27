import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  constructor(private loginservice: LoginServiceService) {

  }
  registro(form: NgForm) {
    const nombre = form.value.nombre;
    const apellidos = form.value.apellidos;
    const telefono = form.value.telefono;
    const email = form.value.email;
    const password = form.value.password1;
    this.loginservice.registro(nombre, apellidos, telefono, email, password);
  }
}
