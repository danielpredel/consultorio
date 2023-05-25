import {
  Component,
  OnInit
} from '@angular/core';
import {
  MedicosService
} from '../medicos.service';
import {
  HttpErrorResponse
} from '@angular/common/http';

@Component({
  selector: 'app-masonry',
  templateUrl: './masonry.component.html',
  styleUrls: ['./masonry.component.css']
})
export class MasonryComponent implements OnInit {
  medicos: any = [];
  estado = false;

  constructor(private medicosService: MedicosService) {}

  ngOnInit(){
    this.medicosService.retornarDatos().subscribe(
      (result: any) => {
        this.medicos = result;
        this.estado = true;
        console.log(this.medicos);
      },
      (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error");
        } else {
          console.log("Server-side error");
        }
      })
  }

}
