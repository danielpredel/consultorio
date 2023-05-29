import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import swal  from 'sweetalert';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
@Injectable({
  providedIn: 'root' 
})
export class LoginServiceService {

  constructor(private router:Router) { }
  token:string="";
  
  login(email:string,password:string){
    console.log(email,password);
      firebase.auth().signInWithEmailAndPassword(email,password).then(
        Response=>{
          firebase.auth().currentUser?.getIdToken().then(
            
             token=>{
              swal("Genial Bienvenido: "+email, "", "success");
                this.token=token;
                this.router.navigate(['citas-reservadas']);
             } 

          )
        }
      ).catch((error) => {
        console.log("nooo")
        const errorCode = error.code;
        const errorMessage = error.message;
        swal("Usuario no encontrado", "Verifica tus datos "+errorMessage, "error");
        
      });
    }
    getidtoken(){
      return this.token;
    }
    estalogiado(){
      return this.token;
    }
    logout(){
      firebase.auth().signOut().then(()=>{
        this.token="";
        this.router.navigate(['/']);
      });
    }
    AgregarAuth(email:string,password:string){
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
          swal("Error: lo siento",errorMessage , "error");
        });
    }
    iniciartoken( token:string){
      this.token=token;
    }
  
}
