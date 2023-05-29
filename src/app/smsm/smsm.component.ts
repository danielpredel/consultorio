import { Component, OnInit } from '@angular/core';
import { getAuth, RecaptchaVerifier,signInWithPhoneNumber,ConfirmationResult } from "firebase/auth";
import swal  from 'sweetalert';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { Router } from '@angular/router';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-smsm',
  templateUrl: './smsm.component.html',
  styleUrls: ['./smsm.component.css']
})
export class SMSMComponent {
  recaptcha:any;
  token:string="";
  enviado:boolean=false;
  cat:boolean=false;
  //confirmationResult:any;
  constructor(private router:Router,private sms:LoginServiceService){
    //this.recapcha();
  }
 
  confirmationResult: ConfirmationResult | undefined;
  recapcha(){
    const auth = getAuth();
     this.recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.recaptcha.render();
    this.cat=true;
  }
  
  enviarCodigo(tele:string){
    const phoneNumber = tele;
    console.log(tele);
    const appVerifier = this.recaptcha.response;
    /// response.response;
    const auth = getAuth();
    console.log(this.recaptcha);
    signInWithPhoneNumber(auth, phoneNumber, this.recaptcha)
    .then((confirmationResult) => {
      // SMS sent. Prompt user to type the code from the message, then sign the
      // user in with confirmationResult.confirm(code).
      //window.confirmationResult = confirmationResult;
      console.log("holaa :)");
      console.log("entraste ;) avr ")
      this.confirmationResult = confirmationResult;
      console.log(this.confirmationResult)
      this.enviado=true;
      // ...
    }).catch((error) => {
      // Error; SMS not sent
      console.log(error);
      // ...
    });
  }
  vercodigo( value:string){
    console.log(value);
    if(this.confirmationResult!=undefined){
      this.confirmationResult.confirm(value)
      .then((result: { user: any; }) => {
        // User signed in successfully.
        const user = result.user;
        // ...
        console.log("funciono :)")
        if(this.confirmationResult!=null){
          firebase.auth().currentUser?.getIdToken().then(
                
            token=>{
             swal("Genial Bienvenido: "+ "", "success");
               this.token=token;
               console.log(this.token)
               this.sms.iniciartoken(this.token);
               this.router.navigate(['citas-reservadas']);
            } 

         )
        }
        
      }).catch(() => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }
    }
   
}
