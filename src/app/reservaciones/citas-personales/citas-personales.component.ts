import { Component, OnInit } from '@angular/core';
import { FirebaseReservaService } from '../firebase-reserva.service';
import { Cita } from '../cita.model';
import { LoginServiceService } from 'src/app/login-service.service';
import { NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels } from '@techiediaries/ngx-qrcode';
import { CodigoqrService } from 'src/app/codigoqr.service';
import { find } from 'rxjs';

@Component({
  selector: 'app-citas-personales',
  templateUrl: './citas-personales.component.html',
  styleUrls: ['./citas-personales.component.css']
})
export class CitasPersonalesComponent implements OnInit {

  citas: Cita[] = [];
  todas: any[] = [];
  elementType= NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  value="";
  datos: any;
  muestra:boolean = false; // bandera para mostrar QR

  constructor(private firebase: FirebaseReservaService, private login:LoginServiceService,private codigoqr: CodigoqrService){}

  ngOnInit(): void {
    this.cargarCitas();
  }


  cargarCitas():void{
    this.firebase.cargarCita().subscribe((citas) => {
      this.todas = Object.values(citas);
      console.log(this.todas);
    });

    this.firebase.citasde(this.login.iduslog()).subscribe((citas) => {
      console.log(citas);
      this.citas = Object.values(citas);
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

  findCita(cita:Cita):number{
    let cont = 0;
    for (const i of this.todas) {
      if(i.dia == cita.dia && i.hora == cita.hora && i.id == cita.id && i.mesNombre == cita.mesNombre)
        break;
      
      cont++;
    }
    return cont;
  }

  generaQR(cita:Cita):void{
    let body = {
      index: this.findCita(cita),
      usuario: this.login.iduslog()
    }

    this.codigoqr.recuperaDatos(body).then((data) => {
      this.datos = data;

      this.value = `Nombre: ${this.datos.nombre}\nTelefono: ${this.datos.telefono}\nCita: ${this.datos.fecha}\nPaciente: ${this.datos.paciente}`;
      this.muestra =true;
    })
    .catch((err) => {
      console.log(err);
    });
    
  }

  borrarCita(cita:Cita):void{
    let i = this.findCita(cita);
    this.firebase.borrarCita(i).subscribe((data) => {
      console.log("Borrado");
      this.cargarCitas();
    })
  }
}
