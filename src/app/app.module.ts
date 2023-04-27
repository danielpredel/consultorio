import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ReservacionesModule } from './reservaciones/reservaciones.module';
import { InicioComponent } from './inicio/inicio.component';
import { MasonryComponent } from './masonry/masonry.component';
import { MedicosService } from './medicos.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    MasonryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReservacionesModule
  ],
  providers: [MedicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
