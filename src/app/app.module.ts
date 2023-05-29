import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ReservacionesModule } from './reservaciones/reservaciones.module';
import { InicioComponent } from './inicio/inicio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import {MatTableModule} from '@angular/material/table';
import { BuscadorComponent } from './buscador/buscador.component';
import { MedicosService } from './medicos.service';
import { MasonryComponent } from './masonry/masonry.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { DomseguroPipe } from './domseguro.pipe';
import { FooterComponent } from './footer/footer.component';
import { HelpComponent } from './accesibilidad/help/help.component';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login-service.service';
import { ABCUsuariosComponent } from './abcusuarios/abcusuarios.component';
import { MostrarUsuaComponent } from './mostrar-usua/mostrar-usua.component';
import { SMSMComponent } from './smsm/smsm.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    InicioComponent,
    BuscadorComponent,
    MasonryComponent,
    AboutComponent,
    DomseguroPipe,
    FooterComponent,
    HelpComponent,
    LoginComponent,
    ABCUsuariosComponent,
    MostrarUsuaComponent,
    SMSMComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReservacionesModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    MatTableModule,
    HttpClientModule
  ],
  providers: [MedicosService,LoginServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
