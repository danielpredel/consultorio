import {
  Injectable
} from '@angular/core';
import {
  Router
} from '@angular/router';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import {
  getAuth,
  createUserWithEmailAndPassword
} from "firebase/auth";
import swal from 'sweetalert';
import {
  getDatabase,
  ref,
  set
} from "firebase/database";
import { FirebaseReservaService } from './reservaciones/firebase-reserva.service';
@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private router: Router,private fire:FirebaseReservaService) {}
  token: string = "";
  usuariolog:string="";
  tipo_us:number=0;
  nombre:string="";
  login(email: string, password: string) {
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password).then(
      Response => {
        var user = firebase.auth().currentUser;
        if (user != null) {
          console.log("soy: "+user.uid);
          this.usuariolog=user.uid;
        }
        
       
        firebase.auth().currentUser?.getIdToken().then(
          token => {
            if(email=="admin@gmail.com"){
              this.tipo_us=2;
            }else{
              this.tipo_us=1;
            }
            if (user != null) {
              this.fire.vernom(user.uid).subscribe(nombre=>{
      
                this.nombre=JSON.stringify(nombre);
            
              });
            }
           
            swal("Bienvenido: " + email, "", "success");
            this.token = token;
            this.router.navigate(['']);
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
  gettipo(){
    return this.tipo_us;
  }
  vnom(){
    return this.nombre;
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
      this.tipo_us=0;
      this.nombre="";
      this.usuariolog="";
    });
  }
  AgregarAuth(email: string, password: string) {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
        swal("Error: lo siento", errorMessage, "error");
      });
  }
  iniciartoken(token: string) {
    this.token = token;
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

  redirectToPhoneLogin() {
    this.router.navigate(['phone-login']);
  }
  iduslog(){
    return this.usuariolog;
  }
}
