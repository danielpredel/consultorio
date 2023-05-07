import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent {
  medicamento: string="";
 
 
  constructor(private route:ActivatedRoute){
    
  }
  ngOnInit(){
    this.route.params.subscribe(params=>{this.medicamento=params['buscar']});
  }
}

