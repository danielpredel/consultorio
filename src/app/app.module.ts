import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ReservacionesModule } from './reservaciones/reservaciones.module';
import { InicioComponent } from './inicio/inicio.component';
import { MasonryComponent } from './masonry/masonry.component';
import { MedicosService } from './medicos.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/*import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';*/
import { BuscadorComponent } from './buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    MasonryComponent
   // BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReservacionesModule,
    BrowserAnimationsModule,
   /* MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTableModule,*/
  ],
  providers: [MedicosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
