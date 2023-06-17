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
import { CitasPersonalesComponent } from './citas-personales/citas-personales.component';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';



@NgModule({
  declarations: [
    ReservarCitaComponent,
    CitasReservadasComponent,
    CalendarioComponent,
    CitasPersonalesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgxQRCodeModule,
  ],
  exports: [
    ReservarCitaComponent, 
    CitasReservadasComponent
  ]
})
export class ReservacionesModule {}
