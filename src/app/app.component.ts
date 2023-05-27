import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'baseAngular';
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyCHyorUKGj_M3VEu1zUl6ISy6NzrWTIEVo",
      authDomain: "consultorio-3f786.firebaseapp.com",
    });
  }
}
