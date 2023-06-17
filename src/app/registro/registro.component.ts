import { Component } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { ValidacionesPersonalizadas } from '../validaciones-personalizadas';
import { passwordMatch } from '../passwordMatch';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  registro: any = {
    nombre: '',
    apellidos: '',
    telefono: '',
    correo: '',
    password: '',
    confirmacionPassword: ''
  }
  formularioRegistro = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellidos: new FormControl('', [Validators.required, Validators.minLength(3)]),
    correo: new FormControl('', [Validators.required, Validators.email]),
    telefono: new FormControl('', [Validators.required, Validators.minLength(10)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8), ValidacionesPersonalizadas.minuscula, ValidacionesPersonalizadas.mayuscula, ValidacionesPersonalizadas.digito]),
    confirmacionPassword: new FormControl('', [Validators.required, Validators.minLength(8), ValidacionesPersonalizadas.minuscula, ValidacionesPersonalizadas.mayuscula, ValidacionesPersonalizadas.digito])
  }, [passwordMatch("password", "confirmacionPassword")]);

  constructor(private loginservice: LoginServiceService) {}

  getControl(name: any): AbstractControl | null {
    return this.formularioRegistro.get(name);
  }

  registrar() {
      const nombre = this.formularioRegistro.value.nombre;
      const apellidos = this.formularioRegistro.value.apellidos;
      const telefono = this.formularioRegistro.value.telefono;
      const email = this.formularioRegistro.value.correo;
      const password = this.formularioRegistro.value.password;
      this.loginservice.registro(nombre, apellidos, telefono, email, password);
  }
}
