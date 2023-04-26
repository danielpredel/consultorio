import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  ReservarCitaComponent
} from './reservar-cita/reservar-cita.component';
import {
  CitasReservadasComponent
} from './citas-reservadas/citas-reservadas.component';
import { FormsModule } from '@angular/forms';
import { CalendarioComponent } from './calendario/calendario.component';



@NgModule({
  declarations: [
    ReservarCitaComponent,
    CitasReservadasComponent,
    CalendarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ReservarCitaComponent, 
    CitasReservadasComponent
  ]
})
export class ReservacionesModule {}
