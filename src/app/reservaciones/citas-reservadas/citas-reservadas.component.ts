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
import { FirebaseReservaService } from '../firebase-reserva.service';

@Component({
  selector: 'app-citas-reservadas',
  templateUrl: './citas-reservadas.component.html',
  styleUrls: ['./citas-reservadas.component.css']
})
export class CitasReservadasComponent implements OnInit {
  citas: Cita[] = [];

  constructor(private citasService: AlmacenamientoCitasService,private guardafire:FirebaseReservaService) {}

  ngOnInit() {
    
     this.guardafire.cargarCita().subscribe(citas=>{
      console.log(citas);
      this.citas=Object.values(citas);
    });
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
  async sleep(seconds:number){
    return new Promise((resolve)=>setTimeout(resolve,seconds*1000));
}  
}
