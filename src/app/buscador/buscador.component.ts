import { Component, OnInit,DoCheck,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedicosService } from '../medicos.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit,DoCheck {
  palabra: string="";
  medicina: any;
  medicinas:any;
  existeMedicina:boolean = false;
  existeFoto:boolean = false;
  fotos:any;
  rand:number=0;
  precio:number = 0;
 
  constructor(private route:ActivatedRoute, private servicio: MedicosService){
    this.servicio.buscarFotos('medicines',35);
    setTimeout(()=>{
      this.medicinas = this.servicio.getMedicinas();
      this.fotos = this.servicio.getFotos();
      this.existeFoto = true;
    },2000);
  }

  ngOnInit(){
    this.route.params.subscribe(params=>{this.palabra=params['buscar']});
  }

  ngDoCheck() {
    this.buscarMedicina(this.palabra.toUpperCase());
  }

  buscarMedicina(buscar: string){
    
    // Buscar Medicina en el arreglo de medicinas
    if(this.medicinas){
      for (const i of this.medicinas){
        if(i.nombre == buscar){
          this.medicina = i;
          this.existeMedicina = true;
          break;
        }else{
          this.existeMedicina = false;
        }   
      } 
    
      this.rand = Math.floor(Math.random() * 34) + 0;
      this.precio = Math.floor(Math.random() * 79) + 29;
    }
  }
}


