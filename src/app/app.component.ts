import { Component, VERSION } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent {
  name = "Jose " + VERSION.major;


  contador = 1;
valor1=this.contador;


  incrementar(){
    this.contador++;
    
  }
  disminuir(){
    this.contador--;
  }

  multiplicacion(){
    this.contador
  }

}



