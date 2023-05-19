import { Component } from '@angular/core';
import swal  from 'sweetalert';
import * as alertifyjs from 'alertifyjs';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
    agarra:any;
    i:number=0;
    tiempo:number=0;
    letras:number=0;
    Bresaltar:boolean=false;
    Bleer:boolean=false;
    Bgris:boolean=false;
    fontSize:number=0;
    valor:number=1;
    contras:boolean= false;
    constructor(){
    }
     getFontSize = () =>{
      return getComputedStyle(document.documentElement).getPropertyValue('font-size');

     }
    
     cambio(){
      //document.documentElement
      //.style.setProperty('font-family',"Georgia, 'Times New Roman', Times, serif");
       //console.log(getComputedStyle(document.documentElement).getPropertyValue('font-family'));
       //document.documentElement
       //.style.setProperty('background', `gray`)
       //document.documentElement.style.fontFamily = "Impact,Charcoal,sans-serif";
       if(!this.Bgris){
        document.documentElement
        .style.setProperty('filter', 'grayscale(1)');
        console.log("hoa");
        this.Bgris=true;
       }else{
        document.documentElement
        .style.setProperty('filter', 'grayscale(0)');
        console.log("hoa");
        this.Bgris=false;
       }
       

     }
      

    Gletra(){
       this.fontSize =parseInt( this.getFontSize());
      // aumentamos el valor de esa variable en 1.1
      console.log(this.fontSize);
      this.fontSize+=this.valor;
      document.documentElement
      .style.setProperty('font-size', `${this.fontSize}px`);
      console.log(this.fontSize);
    }
    Pletra(){
      this.fontSize =parseInt( this.getFontSize());
      // aumentamos el valor de esa variable en 1.1
      console.log(this.fontSize);
      this.fontSize-=this.valor;
      document.documentElement
      .style.setProperty('font-size', `${this.fontSize}px`)
      console.log(this.fontSize);
    }
    Resaltar(){ 
      if(!this.Bresaltar){
        swal("¿Que deseas resaltar?", {
          buttons: {
            Cancel:{
              text: "Links",
              value: "defeat"
            },
            catch: {
              text: "Titulos",
              value: "catch",
            },
            defeat:{
              text: "Botones",
              value: "parra",
            }
          },
        })
        .then((value) => {
          switch (value) {
            case "defeat":
              this.Resaltador("a");
              swal("Links", "Se resaltaron los links", "success");
              break;
            case "catch":
              this.Resaltador("h1,h2,h3,h4,h5,h6, .titulo, .subtitulo, mat-card-title");
              swal("Titulos!", "Se resaltaron los titulos", "success");
              break;
              case "parra":
                this.Resaltador("button, .boton, .btn-info");
                swal("Botones!", "Se resaltaron los botones", "success");
                break;
          }
        });
        this.Bresaltar=true;
      }else{
        this.Antiresal();
      }
        
    }
    Resaltador(etiqueta:string){
        this.agarra=document.querySelectorAll(etiqueta);
        for(this.i=0;this.i<this.agarra.length;this.i++){
          this.agarra[this.i].style.background="rgb(56, 68, 179)";
        }
    }
    Antiresal(){
      this.agarra=document.querySelectorAll("button, .boton, .btn-info,h1,h2,h3,h4,h5,h6, .titulo, .subtitulo, mat-card-title,a");
        for(this.i=0;this.i<this.agarra.length;this.i++){
          this.agarra[this.i].style.removeProperty("background");
        }
       this.Bresaltar=false;
    }
    colores(){
      if(!this.Bleer){
        this.Bleer=true;
        this.leer();
      }else{
        this.Bleer=false;
        speechSynthesis.cancel();

      }
     
      
        

    }
    leer(){
      console.log("hola");
      this.agarra=document.querySelectorAll('p,i,mat-card-title,mat-card-subtitle,mat-card-content,card-title,h1,h2,h3,h4,h5,h6');
     
      setTimeout(async () => {
        for(this.i=0;this.i<this.agarra.length;this.i++){
          console.log(this.agarra[this.i].innerHTML);
          
          this.agarra[this.i].style.background="rgb(56, 68, 179)";
          speechSynthesis.speak(new SpeechSynthesisUtterance(this.agarra[this.i].innerHTML));
          /*if(speechSynthesis.speaking){
            this.sleep(1);
          }*/
          while(speechSynthesis.speaking){
            await this.sleep(3);
            console.log("habla");
          }
          this.agarra[this.i].style.removeProperty("background");
          if(!this.Bleer){
            break;
          }
        }
        },0);
    }
    async sleep(seconds:number){
        return new Promise((resolve)=>setTimeout(resolve,seconds*1000))
    }    
   
    contraste(){
      if(!this.contras){
        document.documentElement
        .style.setProperty('filter', 'invert(1)');
        console.log("hoa");
        this.contras=true;
       }else{
        document.documentElement
        .style.setProperty('filter', 'invert(0)');
        console.log("hoa");
        this.contras=false;
       }
    }

    
    
}
