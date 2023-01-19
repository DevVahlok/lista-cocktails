import { Component } from '@angular/core';
import { Cocktail } from 'src/models/cocktail';
import { NombreIngrediente } from 'src/models/ingrediente';
import { listaCocktails } from 'src/models/listaCocktails';
import { listaIngredientes } from 'src/models/listaIngredientes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public listaCocktails: Cocktail[] = listaCocktails;
  public listaIngredientes: { nombre: NombreIngrediente, isAlcohol: boolean, checked: boolean }[] = listaIngredientes;

  ngOnInit() {
    console.log('hola');
  }

  abrirReceta(link: string) {
    window.open(link, "_blank");
  }

  seleccionIngrediente(checked: boolean, nombre: string) {
    console.log(checked, nombre);
  }
}