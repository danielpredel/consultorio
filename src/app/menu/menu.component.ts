import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  tipousu:number=0;
  nombre:string="";
  constructor(private route: Router, private login:LoginServiceService) {
    this.tipousu=login.gettipo();
  }
  
  dirigir(buscar: string) {
    if (buscar != '') {
      this.route.navigate(['Buscar/' + buscar]);
    } else {
      this.route.navigate(['']);
    }
  }
  nombrev(){
    this.nombre=this.login.vnom();
    if(this.nombre!=""){
      return true;
    }
    return false;
  }
  estalogeado(){
    return this.login.estalogiado();

  }
  permiso(tipo:number,para:number){
    //console.log(tipo+"   "+para)
    //console.log("usuario "+this.login.gettipo())
    if(tipo==0){
      //igual

      if(para==this.login.gettipo()){
        return true;
      }
      return false;
    }else{
      //menor o igual
      if(this.login.gettipo()<=para){
        return true;
      }
      return false;
    }
  }
  logout(){
    return this.login.logout();
    
  }
}
