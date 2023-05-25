import {
  Component,
  DoCheck,
  OnInit
} from '@angular/core';
import {
  ActivatedRoute
} from '@angular/router';
import {
  MedicamentosService
} from '../medicamentos.service';
import {
  HttpErrorResponse
} from '@angular/common/http';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit, DoCheck {
  medicina: any;
  estado = false;
  existencia = false;
  busqueda: string = '';
  busquedaAnterior = '';

  constructor(private route: ActivatedRoute, private medicamentosService: MedicamentosService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.busqueda = params['buscar']
    });
  }

  ngDoCheck() {
    if (this.busqueda != this.busquedaAnterior) {
      this.buscarMedicina(this.busqueda);
    }
  }

  buscarMedicina(buscar: string) {
    this.medicamentosService.retornarDatos(buscar).subscribe(
      (result: any) => {
        console.log(result);
        this.busquedaAnterior = this.busqueda;
        this.estado = true;
        if (result == null) {
          this.existencia = false;
        } else {
          this.medicina = result;
          this.existencia = true;
        }
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
