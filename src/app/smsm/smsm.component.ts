import {
  Component
} from '@angular/core';
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
  ConfirmationResult
} from "firebase/auth";
import swal from 'sweetalert';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import {
  Router
} from '@angular/router';
import {
  LoginServiceService
} from '../login-service.service';
import { FirebaseReservaService } from '../reservaciones/firebase-reserva.service';
import { Usuarios } from '../reservaciones/usuario.model';

@Component({
  selector: 'app-smsm',
  templateUrl: './smsm.component.html',
  styleUrls: ['./smsm.component.css']
})
export class SMSMComponent {
  recaptcha: any;
  token: string = "";
  enviado: boolean = false;
  cat: boolean = false;
  usuario:Usuarios | undefined;
  //confirmationResult:any;
  constructor(private router: Router, private sms: LoginServiceService,private fire:FirebaseReservaService) {
    //this.recapcha();
  }

  confirmationResult: ConfirmationResult | undefined;
  recapcha() {
    const auth = getAuth();
    this.recaptcha = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    this.recaptcha.render();
    this.cat = true;
  }

  enviarCodigo(tele: string) {
    console.log("numero: "+tele.substring(3))
    this.fire.buscarnum(tele.substring(3)).subscribe(usu=>{
      var hola="";
      hola= Object.keys(usu)[0];
     if(hola!=undefined){
      console.log("cadena "+hola);
      console.log("veamos: "+this.sms.usuariolog);
        this.sms.usuariolog=hola;
        this.fire.vernom(hola).subscribe(nombre=>{
          this.sms.nombre=JSON.stringify(nombre);
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
              this.enviado = true;
              // ...
            }).catch((error) => {
              // Error; SMS not sent
              console.log(error);
              // ...
            });
        });
     }else{
      swal("No esta Registrado este numero" , "registrate para poder ingresar", "error");
     }
    })
    
      
      //swal("Numero no registrado" , "tienes que registrarte", "error");
    
    
  }

  vercodigo(value: string) {
    console.log(value);
    if (this.confirmationResult != undefined) {
      this.confirmationResult.confirm(value)
        .then((result: {
          user: any;
        }) => {
          // User signed in successfully.
          const user = result.user;
          // ...
          console.log("funciono :)")
          if (this.confirmationResult != null) {
            firebase.auth().currentUser?.getIdToken().then(
              token => {
                swal("Genial Bienvenido" , "", "success");
                this.sms.tipo_us=1;
                this.token = token;
                console.log(this.token)
                this.sms.iniciartoken(this.token);
                this.router.navigate(['']);
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
