import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'Se envia lo que esta en el compotente';

  movies = [{
    title: 'SpiderMan',
    releaseDate : new Date(),
    price: 1400.99
  },
  {
    title: 'Moana',
    releaseDate : new Date("13-Octubr-2021"),
    price: 349.45
  
  }]

  duplicarnumero(valor:number): number{
    return valor * 2;
  }
}
