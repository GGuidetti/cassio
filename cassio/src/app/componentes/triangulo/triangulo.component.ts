import {Component} from'@angular/core';
@Component({
  selector: 'triangulo-component',
  templateUrl: 'triangulo.component.html'


})

export class TrianguloComponent{
  valor1: number=0;
  valor2: number=0;
  resultado: string;

calcular():void{
  var area = Number(this.valor1)+Number(this.valor2)/2;
  this.resultado="Você gargarejou"+area+"vezes";

}

}
