import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReservarCitaComponent } from './reservaciones/reservar-cita/reservar-cita.component';
import { CitasReservadasComponent } from './reservaciones/citas-reservadas/citas-reservadas.component';
import { MasonryComponent } from './masonry/masonry.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MostrarUsuaComponent } from './mostrar-usua/mostrar-usua.component';
import { SMSMComponent } from './smsm/smsm.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'reservar-cita', component: ReservarCitaComponent },
  { path: 'citas-reservadas', component: CitasReservadasComponent },
  { path: 'masonry', component: MasonryComponent},
  { path: 'about', component: AboutComponent},
  { path: 'Buscar/:buscar', component: BuscadorComponent},
  { path: 'login', component: LoginComponent},
  { path: 'usuarios', component: MostrarUsuaComponent},
  { path: 'phone-login', component: SMSMComponent},
  { path: 'registro', component: RegistroComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'InicioComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
