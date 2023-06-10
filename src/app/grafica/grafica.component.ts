import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'node_modules/chart.js';
import { AlmacenamientoCitasService } from '../reservaciones/almacenamiento-citas.service';
import { FirebaseReservaService } from '../reservaciones/firebase-reserva.service';
import { Cita } from '../reservaciones/cita.model';
Chart.register(...registerables);

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit{
  data: Cita[] = [];
  numero : number = 0;
  numero2 : number = 0;
  numero3 : number = 0;
  numero4 : number = 0;
  numero5 : number = 0;
  numero6 : number = 0;
  numero7 : number = 0;
  meses: number[] = [];

  myChart:any;
  constructor(private citasService: AlmacenamientoCitasService,private guardafire:FirebaseReservaService){ 
   
  }

  ngOnInit() {
    this.obtenerDatos();
  }
  
  obtenerDatos(){
    this.guardafire.cargarJunio().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero = this.data.length;
      console.log('Junio');
      console.log(this.numero);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });

     this.guardafire.cargarJulio().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero2 = this.data.length;
      console.log('Julio');
      console.log(this.numero2);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });

     this.guardafire.cargarAgosto().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero3 = this.data.length;
      console.log('Agosto');
      console.log(this.numero3);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });

     this.guardafire.cargarSeptiembre().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero4 = this.data.length;
      console.log('Septiembre');
      console.log(this.numero4);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });

     this.guardafire.cargarOctubre().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero5 = this.data.length;
      console.log('Octubre');
      console.log(this.numero5);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });

     this.guardafire.cargarNoviembre().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero6 = this.data.length;
      console.log('Noviembre');
      console.log(this.numero6);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });
     
     this.guardafire.cargarDiciembre().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero7 = this.data.length;
      console.log('Diciembre');
      console.log(this.numero7);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });
  }

  pintar(){
    this.myChart = new Chart("piechart", {
      type: 'bar',
      data: {
          labels: ['Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre','Diciembre'],
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
  RenderChart(){
    this.guardafire.cargarJunio().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero = this.data.length;
      console.log('Junio');
      console.log(this.numero);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });

     this.guardafire.cargarJulio().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero2 = this.data.length;
      console.log('Julio');
      console.log(this.numero2);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });

     this.guardafire.cargarAgosto().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero3 = this.data.length;
      console.log('Agosto');
      console.log(this.numero3);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });

     this.guardafire.cargarSeptiembre().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero4 = this.data.length;
      console.log('Septiembre');
      console.log(this.numero4);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });

     this.guardafire.cargarOctubre().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero5 = this.data.length;
      console.log('Octubre');
      console.log(this.numero5);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });

     this.guardafire.cargarNoviembre().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero6 = this.data.length;
      console.log('Noviembre');
      console.log(this.numero6);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });
     
     this.guardafire.cargarDiciembre().subscribe(data=>{
      console.log(data);
      this.data=Object.values(data);
      this.numero7 = this.data.length;
      console.log('Diciembre');
      console.log(this.numero7);
      this.meses=[this.numero,this.numero2, this.numero3, this.numero4, this.numero5, this.numero6, this.numero7];
      if (this.myChart) {
        this.myChart.destroy();
      }
      this.pintar();
     });
  }
}
