import { Component, OnInit } from '@angular/core';
import { Cita } from '../cita.model';
import { AlmacenamientoCitasService } from '../almacenamiento-citas.service';

@Component({
  selector: 'app-citas-reservadas',
  templateUrl: './citas-reservadas.component.html',
  styleUrls: ['./citas-reservadas.component.css']
})
export class CitasReservadasComponent  implements OnInit {
  citas: Cita[] = [];

  constructor(private citasService: AlmacenamientoCitasService) {}

  ngOnInit() {
    this.citas = this.citasService.getCitas();
    // console.log(this.citas);
  }

}
