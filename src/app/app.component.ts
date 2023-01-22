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

  public listaCocktails: Cocktail[] = [];
  public listaIngredientes: { nombre: NombreIngrediente, isAlcohol: boolean, checked: boolean }[] = listaIngredientes;
  public listaOriginalCocktails: Cocktail[] = listaCocktails;

  ngOnInit() {
    this.listaIngredientes = this.ordenarPorNombre(this.listaIngredientes);
  }

  abrirReceta(link: string) {
    window.open(link, "_blank");
  }

  seleccionIngrediente() {

    this.listaCocktails = this.ordenarPorNombre(listaCocktails.filter(cocktail => {

      let noInsertable = true;

      cocktail.ingredientes.forEach(ingredienteCocktail => {

        let encontrado = false;

        this.listaIngredientes.forEach(ingrediente => {
          if (ingrediente.checked && ingrediente.nombre === ingredienteCocktail.nombre) encontrado = true;
        })

        if (!encontrado) noInsertable = false;

      })

      return noInsertable;
    }))

  }

  ordenarPorNombre(arr: any[]) {
    return arr.sort((a, b) => (a.nombre > b.nombre) ? 1 : ((b.nombre > a.nombre) ? -1 : 0))
  }
}