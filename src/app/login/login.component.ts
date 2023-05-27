import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServiceService } from '../login-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private loginservice:LoginServiceService){

  }
login(form:NgForm){
  const email=form.value.email;
  const password=form.value.password;
  console.log("pasa");
  this.loginservice.login(email,password);
}
}
