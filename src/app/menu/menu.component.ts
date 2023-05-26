import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private route: Router, private login:LoginServiceService) {}
  
  dirigir(buscar: string) {
    if (buscar != '') {
      this.route.navigate(['Buscar/' + buscar]);
    } else {
      this.route.navigate(['']);
    }
  }
  estalogeado(){
    return this.login.estalogiado();

  }
  logout(){
    return this.login.logout();
    
  }
}
