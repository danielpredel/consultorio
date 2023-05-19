import { Component } from '@angular/core';

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
    auxcadena:string="";
    aux2cadena:string="";
    constructor(){
      console.log("hola");
      

    }
    coco(){

    }
    colores(){
      console.log("hola");
      this.agarra=document.querySelectorAll('p,i,mat-card-title,mat-card-subtitle,mat-card-content');
     
      setTimeout(async () => {
        for(this.i=0;this.i<this.agarra.length;this.i++){
          console.log(this.agarra[this.i].innerHTML);
          
          this.agarra[this.i].style.background="blue";
          speechSynthesis.speak(new SpeechSynthesisUtterance(this.agarra[this.i].innerHTML));
          /*if(speechSynthesis.speaking){
            this.sleep(1);
          }*/
          while(speechSynthesis.speaking){
            await this.sleep(5);
            console.log("habla");
          }
          this.agarra[this.i].style.removeProperty("background");
        }
        },0);
        

    }
    async sleep(seconds:number){
        return new Promise((resolve)=>setTimeout(resolve,seconds*1000))
    }    
    
     
     
}
