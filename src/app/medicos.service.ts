import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) {}

  retornarDatos(){
    return this.http.get("https://consultorio.fly.dev/api/doctores");
  }

  
}
