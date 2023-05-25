import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MedicamentosService {

  constructor(private http: HttpClient) {}

  retornarDatos(medicamento: string){
    return this.http.get("https://consultorio.fly.dev/api/medicinas?nombre=" + medicamento);
  }

}
