import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicosService } from '../medicos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  palabra: string="";
  medicina: any;
  
 
  constructor(private route:ActivatedRoute, private medicinas: MedicosService){
    this.medicinas.buscarMedicinas();
    this.medicina = this.medicinas.getMedicinas();
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{this.palabra=params['buscar']});
  }

  buscarMedicina(buscar: string){
    for (const i of this.medicina) {
      if(i.nombre=== buscar){
        console.log("Simón");
        break;
      }
      
    }
    
   
}}

