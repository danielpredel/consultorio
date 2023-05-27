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
      databaseURL: "https://consultorio-3f786-default-rtdb.firebaseio.com",
      projectId: "consultorio-3f786",
      storageBucket: "consultorio-3f786.appspot.com",
      messagingSenderId: "354969775612",
      appId: "1:354969775612:web:b67c5923ebff1248d3d679",
      measurementId: "G-B3ZXLC4HTN"
    });
  }
}
