import {
  Component,
  OnInit
} from '@angular/core';
import {
  AlmacenamientoCitasService
} from '../almacenamiento-citas.service';
import {
  Cita
} from '../cita.model';

import * as alertifyjs from 'alertifyjs';
import { LoginServiceService } from 'src/app/login-service.service';

@Component({
  selector: 'app-reservar-cita',
  templateUrl: './reservar-cita.component.html',
  styleUrls: ['./reservar-cita.component.css']
})
export class ReservarCitaComponent implements OnInit {
  estadoFecha: boolean = false;
  fecha: any;
  fechaString: string | undefined;
  nombre: string = "";
  edad: number = 0;
  citas:Cita[]=[]
  cita: Cita = {
    id: "",
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
  citasFechaSeleccionada: Cita[] = [];
  selectedOption: number = 0;
  horas: any = [];
  horasOcupadas: any = [];
  doctor: any = null;

  constructor(private citasService: AlmacenamientoCitasService, private loginService: LoginServiceService) {
    this.citasService.getCitas();
    this.nombre = this.loginService.vnom();
  }

  ngOnInit() {
    this.cita = this.citasService.nuevaCita();
  }

  procesaPropagar(mensaje: any) {
    this.fecha = mensaje;
    this.estadoFecha = true;
    this.fechaString = `${this.fecha.diaNombre} ${this.fecha.dia} de ${this.fecha.mesNombre} del ${this.fecha.year}`;
    this.horas = [];
    this.horasOcupadas = [];
    // Al seleccionar una fecha, buscamos dentro del servicio las citas del mismo dia
    this.citasFechaSeleccionada = this.citasService.getCitasFecha(this.fecha.dia, this.fecha.mes, this.fecha.year);
    this.citasFechaSeleccionada.forEach((element: {
      hora: any;
    }) => {
      this.horasOcupadas.push(element.hora);
    });
    if (this.horasOcupadas.length > 0) {
      for (let i = 8; i < 20; i++) {
        if (!this.horasOcupadas.includes(i)) {
          this.horas.push(i);
        }
      }
    } else {
      for (let i = 8; i < 20; i++) {
        this.horas.push(i);
      }
    }
  }

  reservarCita() {
    console.log(this.edad);
    this.cita.year = this.fecha.year;
    this.cita.mes = this.fecha.mes;
    this.cita.dia = this.fecha.dia;
    this.cita.hora = this.horas[this.selectedOption];
    this.cita.paciente = this.nombre;
    this.cita.doctor = this.doctor;
    this.cita.diaNombre = this.fecha.diaNombre;
    this.cita.mesNombre = this.fecha.mesNombre;
    this.cita.edad = this.edad;
    this.citasService.agregarCita(this.cita);
    this.cita = this.citasService.nuevaCita();
    this.estadoFecha = false;
    this.nombre = '';
    alertifyjs.alert('Cita Reservada', 'Se ha almacenado tu reservacion en nuestro sistema', function () {
      alertifyjs.success('Reservacion Exitosa');
    });
    
  }
}
