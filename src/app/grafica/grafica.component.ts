import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'node_modules/chart.js';
import { AlmacenamientoCitasService } from '../reservaciones/almacenamiento-citas.service';
import { FirebaseReservaService } from '../reservaciones/firebase-reserva.service';
import { Cita } from '../reservaciones/cita.model';
Chart.register(...registerables);

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {
  data: Cita[] = [];
  numero: number = 0;
  numero2: number = 0;
  numero3: number = 0;
  numero4: number = 0;
  numero5: number = 0;
  numero6: number = 0;
  numero7: number = 0;
  meses: number[] = [];
  diasSemana: {
    lun: number,
    mar: number,
    mie: number,
    jue: number,
    vie: number,
    sab: number,
    dom: number,
  } = {
      lun: 0,
      mar: 0,
      mie: 0,
      jue: 0,
      vie: 0,
      sab: 0,
      dom: 0,
    };

  edades: {
    ran0: number,
    ran10: number,
    ran20: number,
    ran30: number,
    ran40: number,
    ran50: number,
    ran60: number,
    ranMas: number
  } = {
      ran0: 0,
      ran10: 0,
      ran20: 0,
      ran30: 0,
      ran40: 0,
      ran50: 0,
      ran60: 0,
      ranMas: 0
    }

  turno: {
    matutino: number,
    vespertino: number
  } = {
      matutino: 0,
      vespertino: 0
    }
  consul1: Cita[] = [];
  consul2: Cita[] = [];
  consul3: Cita[] = [];

  myChart: any;
  constructor(private citasService: AlmacenamientoCitasService, private guardafire: FirebaseReservaService) {

  }

  ngOnInit() {
    this.obtenerDatos();
  }


  consulta1() {
    // consultas por dia de la semana
    this.guardafire.cargarCita().subscribe(data => {
      this.consul1 = Object.values(data);
      // console.log(this.consul1);
      for (let cita of this.consul1) {
        switch (cita.diaNombre.toString()) {
          case "Lunes":
            this.diasSemana.lun++;
            break;
          case "Martes":
            this.diasSemana.mar++;
            break;
          case "Miercoles":
            this.diasSemana.mie++;
            break;
          case "Jueves":
            this.diasSemana.jue++;
            break;
          case "Viernes":
            this.diasSemana.vie++;
            break;
          case "Sabado":
            this.diasSemana.sab++;
            break;
          case "Domingo":
            this.diasSemana.dom++;
            break;
        }
      }

      //console.log(this.diasSemana);

    });
  }

  consulta2() {
    //consultas por edad
    this.guardafire.cargarCita().subscribe(data => {
      this.consul2 = Object.values(data);
      for (let cita of this.consul2) {
        // console.log(cita.edad);
        if (cita.edad >= 0 && cita.edad < 10) {
          this.edades.ran0++;
        }
        if (cita.edad >= 10 && cita.edad < 20) {
          this.edades.ran10++;
        }
        if (cita.edad >= 20 && cita.edad < 30) {
          this.edades.ran20++;
        }
        if (cita.edad >= 30 && cita.edad < 40) {
          this.edades.ran30++;
        }
        if (cita.edad >= 40 && cita.edad < 50) {
          this.edades.ran40++;
        }
        if (cita.edad >= 50 && cita.edad < 60) {
          this.edades.ran50++;
        }
        if (cita.edad >= 60 && cita.edad < 70) {
          this.edades.ran60++;
        }
        if (cita.edad >= 70) {
          this.edades.ranMas++;
        }
      }
      // console.log(this.edades);
    });
  }

  consulta3() {
    // consultas por turno
    this.guardafire.cargarCita().subscribe(data => {
      this.consul3 = Object.values(data);
      for (let cita of this.consul3) {
        if (cita.hora < 12) {
          this.turno.matutino++;
        } else {
          this.turno.vespertino++;
        }
      }
    });

    // console.log(this.turno);
  }

  obtenerDatos() {
    // consultas
    this.consulta1();
    this.consulta2();
    this.consulta3();
    this.guardafire.cargarJunio().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero = this.data.length;
      console.log('Junio');
      console.log(this.numero);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarJulio().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero2 = this.data.length;
      console.log('Julio');
      console.log(this.numero2);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarAgosto().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero3 = this.data.length;
      console.log('Agosto');
      console.log(this.numero3);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarSeptiembre().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero4 = this.data.length;
      console.log('Septiembre');
      console.log(this.numero4);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarOctubre().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero5 = this.data.length;
      console.log('Octubre');
      console.log(this.numero5);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarNoviembre().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero6 = this.data.length;
      console.log('Noviembre');
      console.log(this.numero6);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarDiciembre().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero7 = this.data.length;
      console.log('Diciembre');
      console.log(this.numero7);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });
  }

  pintar() {
    this.myChart = new Chart("piechart", {
      type: 'bar',
      data: {
        labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
        datasets: [{
          label: 'Consultas al mes',
          data: this.meses,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  RenderChart() {
    // this.consultas.cargarJunio();
    this.guardafire.cargarJunio().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero = this.data.length;
      console.log('Junio');
      console.log(this.numero);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarJulio().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero2 = this.data.length;
      console.log('Julio');
      console.log(this.numero2);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarAgosto().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero3 = this.data.length;
      console.log('Agosto');
      console.log(this.numero3);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarSeptiembre().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero4 = this.data.length;
      console.log('Septiembre');
      console.log(this.numero4);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarOctubre().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero5 = this.data.length;
      console.log('Octubre');
      console.log(this.numero5);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarNoviembre().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero6 = this.data.length;
      console.log('Noviembre');
      console.log(this.numero6);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });

    this.guardafire.cargarDiciembre().subscribe(data => {
      console.log(data);
      this.data = Object.values(data);
      this.numero7 = this.data.length;
      console.log('Diciembre');
      console.log(this.numero7);
      this.meses = [this.numero, this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
    });
  }
}
