import { Component,NgModule } from '@angular/core';
import swal  from 'sweetalert';
export interface PeriodicElement {
  name: string;
  weight: string;

}
const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Peso inferior al normal', weight: 'menos de 18.5'},
  { name: 'Normal', weight: '18.5-24.9'},
  {name: 'Peso superior al normal', weight: '25.0-29.9'},
  { name: 'Obesidad', weight:'mas de 30.0'},
  
];

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  video='jiCU7rgLOkY';
  video2='_JDOGSkVMNY';
  displayedColumns: string[] = [ 'name', 'weight'];
  dataSource = ELEMENT_DATA;
  valida:boolean=false;
  altura:number=0;
  peso:number=0;
  imc:number=10;
  nombre:string="";
  calcular(){
    // (IMC = peso (kg)/ [estatura (m)]2.
    
    if(this.altura!=0||this.peso!=0||this.nombre!=""){
      
      this.imc=this.peso/((this.altura/100)*(this.altura/100));
     if(this.imc<18.5){
      swal({
        title: "PESO BAJO",
        text: "TU PESO ESTA ALGO BAJO IMC:"+this.imc,
        icon: "warning",
      });
     }else if(this.imc<24.9){
      swal({
        title: "PESO NORMAL",
        text: "TU PESO ESTA EN EL RANGO NORMAL IMC:"+this.imc,
        icon: "success",
      });
     }else if(this.imc<29.9){
      swal({
        title: "PESO SUPERIOR AL NORMAL",
        text: "TU PESO SUPERIOR AL NORMAL TEN CUIDADO IMC:"+this.imc,
        icon: "warning",
      });
     }else{
      swal({
        title: "TIENES SOBREPESO",
        text: "CUIDADO TIENES SOBREPESO IMC:"+this.imc,
        icon: "error",
      });

     }
      
      this.valida=true;
      
    }
    
  }
}

