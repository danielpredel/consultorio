import { Component } from '@angular/core';
import swal  from 'sweetalert';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent {
    Bresaltar:boolean=false;
    agarra:any;
    i:number=0;
    aux:any;
    Bgris:boolean=false;
    Bcon:boolean=false;
    Bleer:boolean=false;
    Bpausa:boolean=false;
    Bmaouse:boolean=false;
    eti:string="p,i,mat-card-title,mat-card-subtitle,mat-card-content,card-title,h1,h2,h3,h4,h5,h6,span,a,th,td,label";
   Recalca(color:any,etiqueta:string,que:string){
    this.agarra=document.querySelectorAll(etiqueta);
    for(this.i=0;this.i<this.agarra.length;this.i++){
      if(etiqueta!="img"){
        this.agarra[this.i].style.background=color;
      }else{
        this.agarra[this.i].style.filter="opacity(.4) drop-shadow(0 0 0 "+color+")";
      }
      console.log(this.agarra[this.i]);
    }
    swal(que+"!!", "Se resaltaron los "+que, "success");
    this.Bresaltar=true;
   }
   quitare(){
      this.agarra=document.querySelectorAll("button, .boton, .btn-info,h1,h2,h3,h4,h5,h6, .titulo, .subtitulo, mat-card-title,a");
      for(this.i=0;this.i<this.agarra.length;this.i++){
        
        this.agarra[this.i].style.removeProperty("background");
      }
      this.agarra=document.querySelectorAll("img");
      for(this.i=0;this.i<this.agarra.length;this.i++){
        this.agarra[this.i].style.removeProperty("filter");
      }
      this.Bresaltar=false;
   }
   texto(au:string, px:string){
    let pxn:number=0,fontsize=0,iaux=0;
    if(px==""||px==null){
      swal("Upss!!", "Al parecer no seleccionaste pixeles tomare 1px", "warning");
      pxn=1;
    }else{
      pxn=parseInt(px);
    }
    this.agarra=document.querySelectorAll(this.eti);
    for(this.i=0;this.i<this.agarra.length;this.i++){
      if(this.agarra[this.i].innerHTML!=""&&this.agarra[this.i].innerHTML!=null){
        console.log(this.i+" esto: "+this.agarra[this.i]);
        fontsize=parseInt(getComputedStyle(this.agarra[this.i]).getPropertyValue('font-size'));
        console.log("antes: "+fontsize);
        if(au=="A"){
          fontsize+=pxn;
        }else{
          fontsize-=pxn;
        }
        console.log("Despues: "+fontsize);
        this.agarra[this.i].style.setProperty('font-size', `${fontsize}px`);
      }
    }
   }
   cambio(){
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
   contraste(){
    if(!this.Bcon){
      document.documentElement
      .style.setProperty('filter', 'invert(1)');
      console.log("hoa");
      this.Bcon=true;
     }else{
      document.documentElement
      .style.setProperty('filter', 'invert(0)');
      console.log("hoa");
      this.Bcon=false;
     }
   }
   colores(col:any){
    
      this.Bleer=true;
      this.leer(col);
    
  }
   leer(col:any){
    this.agarra=document.querySelectorAll('p,i,.card-text,mat-card-title,mat-card-subtitle,mat-card-content,card-title,h2,h3,h4,h5,h6');
    setTimeout(async () => {
      for(this.i=0;this.i<this.agarra.length;this.i++){
        console.log(this.agarra[this.i].innerHTML);
       
        speechSynthesis.speak(new SpeechSynthesisUtterance(this.agarra[this.i].innerHTML));
        
        while(speechSynthesis.speaking  ){
          this.agarra[this.i].style.background=col;  
          if(this.Bpausa){
            this.agarra[this.i].style.removeProperty("background");
          }
          await this.sleep(1);
        }
        this.agarra[this.i].style.removeProperty("background");
        if(!this.Bleer ){
          break;
        }
      }
      },0);
  }
  async sleep(seconds:number){
      return new Promise((resolve)=>setTimeout(resolve,seconds*1000));
  }    
  cancelarl(){
    this.Bleer=false;
    speechSynthesis.cancel();
  }
  verpr(){
    if(!this.Bpausa){
      console.log("pausar");
      this.Bpausa=true;
      speechSynthesis.pause();
    }else{
      console.log("reaundar");
      this.Bpausa=false;
      speechSynthesis.resume();
      
    }
  }
  Agrandar(){
    if(this.Bmaouse){
      this.agarra = document.querySelectorAll("body,a,button,iframe");
      for(this.i=0;this.i<this.agarra.length;this.i++){
        this.agarra[this.i].classList.remove("cursor-big");
      }
      
      this.Bmaouse=false;
    }else{
      this.agarra = document.querySelectorAll("body,a,button,iframe");
      for(this.i=0;this.i<this.agarra.length;this.i++){
        this.agarra[this.i].classList.add("cursor-big");
      }
      
      this.Bmaouse=true;
    }
  }
}
