import { Ingrediente } from "./ingrediente";

export interface Cocktail {
    nombre: NombreCocktail,
    ingredientes: Ingrediente[],
    link: string
}

export type NombreCocktail = 'Daiquiri' | 'adios';
