import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import swal from 'sweetalert';
import {
  getDatabase,
  ref,
  set
} from "firebase/database";
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  constructor(private router: Router) {}
  token: string = "";

  login(email: string, password: string) {
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      Response => {
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            swal("Bienvenido: " + email, "", "success");
            this.token = token;
            this.router.navigate(['citas-reservadas']);
          }
        )
      }
    ).catch((error) => {
      console.log("nooo")
      const errorCode = error.code;
      const errorMessage = error.message;
      swal("Usuario no encontrado", "Verifica tus datos ", "error");
    });
  }

  getidtoken() {
    return this.token;
  }

  estalogiado() {
    return this.token;
  }

  logout() {
    firebase.auth().signOut().then(() => {
      this.token = "";
      this.router.navigate(['/']);
    });
  }

  redirectToRegistro() {
    this.router.navigate(['registro']);
  }

  registro(nombre: string, apellidos: string, telefono: string, email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password).then(
      Response => {
        var user = firebase.auth().currentUser;
        var database = getDatabase();
        if (user != null) {
          set(ref(database, 'Usuarios/' + user.uid), {
            nombre: nombre,
            apellidos: apellidos,
            email: email,
            telefono: telefono
          });
          swal("Registro Exitoso", "", "success");
        }
      }).catch((error) => {
      swal("Ocurrio un Error", "", "error");
    });
  }
  
  redirectToPhoneLogin(){
    this.router.navigate(['phone-login']);
  }
}
