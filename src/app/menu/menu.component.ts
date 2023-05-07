import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor( private route:Router){
  }
  
  hola: string="tomate";
dirigir(buscar:string){
   console.log(buscar);
   if(buscar!=""){
    this.route.navigate(['Buscar/'+buscar]);
   }else{
    this.route.navigate(['']);
   }
   
  }
}
