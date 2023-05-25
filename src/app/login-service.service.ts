import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

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
                this.token=token;
                this.router.navigate(['citas-reservadas']);
             } 
          )
        }
      )
    }
    getidtoken(){
      return this.token;
    }
  
}
