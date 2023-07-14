import { Component } from '@angular/core';

type Item = {

  nombre: string;
  costo: string;

}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  items: Item[] = [

    {
      nombre: 'Converse',
      costo: '100$'
    },

    {
      nombre: 'Adidas',
      costo: '200$'
    },

    {
      nombre: 'Nike',
      costo: '300$'
    }

  ]

  mostrarLista: boolean = true;

  toggleLista() {

    this.mostrarLista = !this.mostrarLista;

  }

  title = 'proyecto-angular';
}
