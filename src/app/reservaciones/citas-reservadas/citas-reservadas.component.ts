import {
  Component,
  OnInit
} from '@angular/core';
import {
  Cita
} from '../cita.model';
import {
  AlmacenamientoCitasService
} from '../almacenamiento-citas.service';

@Component({
  selector: 'app-citas-reservadas',
  templateUrl: './citas-reservadas.component.html',
  styleUrls: ['./citas-reservadas.component.css']
})
export class CitasReservadasComponent implements OnInit {
  citas: Cita[] = [];

  constructor(private citasService: AlmacenamientoCitasService) {}

  ngOnInit() {
    this.citas = this.citasService.getCitas();
    this.citas.sort((a, b) => {
      if (a.year < b.year) {
        return -1;
      } else if (a.year == b.year) {
        if (a.mes < b.mes) {
          return -1;
        } else if (a.mes == b.mes) {
          if (a.dia < b.dia) {
            return -1;
          } else if (a.dia == b.dia) {
            if (a.hora < b.hora) {
              return -1;
            } else {
              return 1;
            }
          } else {
            return 1;
          }
        } else {
          return 1;
        }
      } else {
        return 1;
      }
    });
  }

}
