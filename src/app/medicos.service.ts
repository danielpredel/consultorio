import {
  HttpClient
} from '@angular/common/http';
import {
  Injectable
} from '@angular/core';
// import {
//   createClient
// } from 'pexels';

// const client = createClient('EDGR1aoC0GY0i96NC0W97bUqsozOrXpi5WU2cuwEjRL2CiRxhMVKqNeo');


@Injectable({
  providedIn: 'root'
})
export class MedicosService {

  constructor(private http: HttpClient) {}

  retornarDatos(){
    return this.http.get("http://localhost:3000/api/doctores");
  }

  
}
