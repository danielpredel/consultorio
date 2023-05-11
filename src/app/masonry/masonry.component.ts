import { Component, OnInit } from '@angular/core';
import { MedicosService } from '../medicos.service';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.css']
})
export class MasonryComponent implements OnInit{
  
  fotos:any;

  constructor(private medicos: MedicosService){}

  ngOnInit(): void {
    this.medicos.buscarFotos('doctor',25);
    setTimeout(() => {
      this.fotos = this.medicos.getFotos();
    }, 1500);
  }
}