import { Ingrediente } from "./ingrediente";

export interface Cocktail {
    nombre: string,
    ingredientes: Ingrediente[],
    link: string,
}