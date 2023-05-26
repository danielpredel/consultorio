import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { ReservarCitaComponent } from './reservaciones/reservar-cita/reservar-cita.component';
import { CitasReservadasComponent } from './reservaciones/citas-reservadas/citas-reservadas.component';
import { MasonryComponent } from './masonry/masonry.component';
import { BuscadorComponent } from './buscador/buscador.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { ABCUsuariosComponent } from './abcusuarios/abcusuarios.component';
import { MostrarUsuaComponent } from './mostrar-usua/mostrar-usua.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'reservar-cita', component: ReservarCitaComponent },
  { path: 'citas-reservadas', component: CitasReservadasComponent },
  { path : 'masonry', component: MasonryComponent},
  { path : 'about', component: AboutComponent},
  { path: 'Buscar/:buscar', component: BuscadorComponent},
  { path: 'Registro', component: ABCUsuariosComponent},
  {path:'login', component: LoginComponent},
  {path:'MostrarUsuarios', component: MostrarUsuaComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'InicioComponent' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
