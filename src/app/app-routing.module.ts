import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReservarCitaComponent } from './reservaciones/reservar-cita/reservar-cita.component';
import { CitasReservadasComponent } from './reservaciones/citas-reservadas/citas-reservadas.component';
import { MasonryComponent } from './masonry/masonry.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'reservar-cita', component: ReservarCitaComponent },
  { path: 'citas-reservadas', component: CitasReservadasComponent },
  { path : 'masonry', component: MasonryComponent},
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
