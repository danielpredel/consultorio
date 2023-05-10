import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  constructor(private route: Router) {}
  
  dirigir(buscar: string) {
    if (buscar != '') {
      this.route.navigate(['Buscar/' + buscar]);
    } else {
      this.route.navigate(['']);
    }
  }
}
