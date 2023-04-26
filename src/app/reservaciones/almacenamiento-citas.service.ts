import {
  Injectable
} from '@angular/core';
import { Cita } from './cita.model';

@Injectable({
  providedIn: 'root'
})
export class AlmacenamientoCitasService {
  private citas: Cita[] = [];

  constructor() {
    this.citas = JSON.parse(localStorage.getItem('citas') || '[]');
  }

  getCitas() {
    return this.citas;
  }

  agregarCita(cita: Cita) {
    this.citas.push(cita);
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
      mesNombre: ''
    };
  }

  getCitasFecha(dia: number, mes: number, year: number): Cita[] {
    let citasFecha = this.citas.filter(cita => cita.year == year && cita.mes == mes && cita.dia == dia);
    return citasFecha;
  }
}
